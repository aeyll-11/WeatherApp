import React from 'react';
import { useState } from 'react';

export default function Weather() {
    
    const apiKey = '135d2ddd8fd8761dc844c00c2aa7775c'
    const [weatherData, setWeaterData] = useState({})
    const [city, setCity] = useState("")

    const getWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setWeaterData(data)
                    setCity("")
                }
            )
        }
    }
    return (
        <div className='container'>
            <input 
            className='input' 
            placeholder='Search'
            onChange={e => setCity(e.target.value)}
            value={city}
            onKeyPress={getWeather}
            />  

            {typeof weatherData.main === 'undefined'?(
                <div>
                    <p>Welcome to Weather app ! Enter in a city to get the weather  of</p>
                </div>
            ): (
                <div>
                    <p>{weatherData.name} </p>
                    <p>{Math.round(weatherData.main.temp)}°C</p>
                    <p>{weatherData.main.humidity}</p>
                    <p>{weatherData.sys.country}</p>
                    <p>{weatherData.wind.speed}</p>
                    <p>{weatherData.weather[0].main}</p>
                </div>
            )
        }
        </div>
    )
}
