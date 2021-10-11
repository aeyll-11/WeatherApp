import React from 'react';
import { useState } from 'react';
import Container from '@mui/material/Container';
import {Input} from './WeatherElements'
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
        <Container>
            <Container>        
            <Input
                placeholder='Search'
                onChange={e => setCity(e.target.value)}
                value={city}
                onKeyPress={getCurrentWeather}/>
            </Container>

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
        }
        </Container>
    )
}
