import axios from 'axios'
import { WeatherData, WeatherError } from '../interfaces/openweather'

const URL = `https://api.openweathermap.org/data/2.5/weather`
export const apiCountryURL = 'https://countryflagsapi.com/png/'

export const WEATHER_API_URL = 'https://api.openweathermap.org/data/2.5'
export const WEATHER_API_KEY = '10e0f5f824c52d26847db4d9c966eaac' // enter your key from openweather API

export function fetchWeather(city: string): Promise<{
  resData: WeatherData
}> {
  return new Promise(async (resolve, reject) => {
    try {
      const apiWeatherURL = `${WEATHER_API_URL}/weather?q=${city}&units=metric&appid=${WEATHER_API_KEY}&lang=pt_br`

      const res = await fetch(apiWeatherURL)

      const resData = await res.json()

      resolve({ resData })
    } catch (error) {
      reject(error)
    }
  })
}

export function forecastWeather(
  lat: string,
  lon: string
): Promise<{
  resForecastData: WeatherData
}> {
  return new Promise(async (resolve, reject) => {
    try {
      const apiWeatherURL = `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&lang=pt_br`

      const res = await fetch(apiWeatherURL)

      const resForecastData = await res.json()

      resolve({ resForecastData })
    } catch (error) {
      reject(error)
    }
  })
}

// export const fetchWeather00 = async (query: string) => {
//   const { data } = await axios.get(URL, {
//     params: {
//       q: query,
//       units: 'metric',
//       APPID: API_KEY
//     }
//   })

//   return data
// }
