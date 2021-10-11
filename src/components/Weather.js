import React from 'react';
import { useState } from 'react';
import image from '../image/bg1.png'
export default function Weather() {
    
    const apiKey = '135d2ddd8fd8761dc844c00c2aa7775c'
    const [currentWeatherData, setCurrentWeatherData] = useState({})
    const [city, setCity] = useState("")

    const getCurrentWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setCurrentWeatherData(data)
                    setCity("")
                }
            )
        }
    }

    return (
        <div class='xl:container md:mx-auto bg-primary'>
            <div class='container h-screen flex-col flex items-center bg-top-center bg-contain bg-no-repeat space-y-32' style={{backgroundImage: `url(${image})`}}>        
            <input class=' mt-20 bg-inputcolor h-14 rounded-full py-3 px-6 text-gray-400 placeholder-gray-400 focus:placeholder-transparent'
                placeholder='Search'
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getCurrentWeather}/>
            

            {typeof currentWeatherData.main === 'undefined'?(
                <div>
                    <h1>Weather</h1>
                </div>
            ): (
                <div>
                    <p>{currentWeatherData.name} </p>
                    <p>{Math.round(currentWeatherData.main.temp)}°C</p>
                    <p>{currentWeatherData.main.humidity}</p>
                    <p>{currentWeatherData.sys.country}</p>
                    <p>{currentWeatherData.wind.speed}</p>
                    <p>{currentWeatherData.weather[0].main}</p>
                </div>
            )
        }   </div>
        </div>
    )
}
