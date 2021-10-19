import React from 'react';
import { useState } from 'react';
import image from '../image/cloudy.png'
export default function Weather() {
    
    const apiKey = '135d2ddd8fd8761dc844c00c2aa7775c'
    const [currentWeatherData, setCurrentWeatherData] = useState({})
    const [city, setCity] = useState("")

    const getCurrentWeather = (event) => {
        if (event.key === "Enter") {
            fetch(`https://api.openweathermap.org/data/2.5/weather?lang=en&q=${city}&units=metric&APPID=${apiKey}`).then(
                response => response.json()
            ).then(
                data => {
                    setCurrentWeatherData(data)
                    setCity("")
                }
            )
        }
    }
    const today = new Date()
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    return (
        <div class='xl:container md:mx-auto bg-white bg-top-center bg-cover bg-no-repeat flex justify-center' style={{backgroundImage: `url(${image})`}}>
            
            <div class='container h-screen flex-col flex items-center space-y-32'>        
            
            {typeof currentWeatherData.name === 'undefined'?(
                <div>
                    <p></p>
                </div>
            ):  (
                
                <div class='flex-col items-start w-full'>
                    <div><p class="text-left text-grey text-base">{date}</p></div>
                    <div><p class="text-base text-dark text-left">{currentWeatherData.name}, <span class=" text-l">{currentWeatherData.sys.country}</span></p></div>       
                </div>
            )}

            <div class='bg-blue bg-opacity-70 backdrop-filter backdrop-blur-lg flex items-center rounded-full shadow-xl border-double'>
            <input class='rounded-l-full w-full py-4 px-6 text-base text-dark text-left font-extralight leading-tight focus:outline-none bg-transparent'
                placeholder='Search'
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getCurrentWeather}/>
            
            </div>
            {typeof currentWeatherData.main === 'undefined'?(
                <div >
                </div>
            ): (
                <div class='container h-screen text-black flex-col'>
                    <div class='flex justify-center items-center'>
                        <h1 class='text-9xl text-mono font-extralight mr-5 '>{Math.round(currentWeatherData.main.temp)}°</h1>
                        <div class='flex flex-col'>
                            <div class=''><p class='text-4xl text-mono font-extralight'>{currentWeatherData.weather[0].main}</p></div>
                            <div class='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 11l5-5m0 0l5 5m-5-5v12" />
                                </svg>
                                <p class='text-mono font-extralight'>{currentWeatherData.main.temp_max}</p>
                            </div>
                        <div class='flex'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 stroke-current" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M17 13l-5 5m0 0l-5-5m5 5V6" /></svg>
                            <p class='text-mono font-extralight text-ls text-red'>{currentWeatherData.main.temp_min}</p>
                        </div>
                    </div>
                    </div>
                    <div class='container flex justify-center divide-x dive-grey pt-20'>
                            <div class='flex-col p-5'><p class='font-thin text-2xl'>{currentWeatherData.main.humidity} %</p> <p class='font-thin text-grey text-opacity-70'>Humidity </p></div>
                            <div class='flex-col p-5'><p class='font-thin text-2xl'>{currentWeatherData.wind.speed} km/h</p> <p class='font-thin text-grey text-opacity-70'>Wind Speed</p></div>
                            <div class='flex-col p-5'><p class='font-thin text-2xl'>{currentWeatherData.main.feels_like}°</p> <p class='font-thin text-grey text-opacity-70'>Feels Like</p></div>
                    </div>

                    
                    {/* <p>{currentWeatherData.main.humidity}</p>
                    <p>{currentWeatherData.wind.speed}</p>
                    <p>{currentWeatherData.weather[0].main}</p> */}
                </div>
            )
        }
        
            </div>
        </div>
    )
}