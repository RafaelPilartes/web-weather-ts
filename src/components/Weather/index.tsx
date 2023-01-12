import React, { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Icons
import { BiWind } from 'react-icons/bi'
import { IoIosWater } from 'react-icons/io'
import { GrLocation } from 'react-icons/gr'

// Styled
import { WeatherContainer } from './styles'
import { BsCloudsFill } from 'react-icons/bs'
import { WeatherData } from '../../interfaces/openweather'
import { type } from 'os'

type weatherProps = {
  data: WeatherData
}

const Weather: React.FC<weatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2)
  const celsius = Math.round(data.main.temp)
  // const celsius = (data.main.temp - 273.15).toFixed(2)

  return (
    <WeatherContainer>
      <div className="containerLotion">
        <GrLocation />
        <span>{data.name}</span>
        <img
          src={`https://countryflagsapi.com/png/${data.sys.country}`}
          alt={`${data.sys.country}`}
        />
      </div>

      <div className="containerTemperature">
        <span>
          {celsius}
          &#8451;
        </span>
      </div>

      <div className="containerState">
        <span>{data.weather[0].description}</span>
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt=""
        />
      </div>

      <div className="containerOtherInfos">
        <div className="containerInfo">
          <IoIosWater />
          <span>{data.main.humidity}%</span>
        </div>

        <div className="divider" />

        <div className="containerInfo">
          <BiWind />
          <span>{data.wind.speed} km/h</span>
        </div>
      </div>

      <div className="containerOtherInfos">
        <div className="containerInfo">
          <span>
            {data.main.temp}
            <sup>K</sup>
          </span>
        </div>

        <div className="divider" />

        <div className="containerInfo">
          {fahrenheit} <sup>&#8457;</sup>
        </div>
      </div>

      <div className="containerOtherInfos">
        <div className="containerInfo">
          <b>Pressão: </b>
          <span>{data.main.pressure}</span>
        </div>
      </div>
    </WeatherContainer>
  )
}

export default Weather
