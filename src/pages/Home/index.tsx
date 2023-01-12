import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'

// Navegação
import { useNavigate } from 'react-router-dom'

// Toast
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Icons
import { BsAlarm } from 'react-icons/bs'
import { BiWind } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { IoIosWater } from 'react-icons/io'

// Styles
import { HomeContainer } from './styles'

// Image
import forecastImg from '../../../public/illustrations/weatherIllustration.png'

// Components
import BaseBtn from '../../components/BaseBtn'
import InputSearch from '../../components/InputSearch'
import Weather from '../../components/Weather'

// Provider
import { AppContext } from '../../provider/AppProvider'

// API
import {
  apiCountryURL,
  fetchWeather,
  forecastWeather,
  WEATHER_API_KEY,
  WEATHER_API_URL
} from '../../api/fetchWeather'
import { WeatherData, WeatherError } from '../../interfaces/openweather'
import { HashLoader } from 'react-spinners'
import { defaultTheme } from '../../themes/default'
import { geoApiOptions, GEO_API_URL, loadOptions } from '../../api/geo'
import { AsyncPaginate } from 'react-select-async-paginate'
import SelectSearch from '../../components/SelectSearch'
import Forecast from '../../components/Forecast'

function Home() {
  // const { backGround, setBackGround } = useContext(AppContext)
  const [searchTxt, setSearchTxt] = useState<string>('')
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [forecast, setForecast] = useState<WeatherData | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const notifyInfo = () => {
    toast.info('Digite o nome da cidade !', {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  const notifyWarn = (warn: string) => {
    toast.warn(warn, {
      position: toast.POSITION.TOP_RIGHT
    })
  }
  const notifyError = (error: string) => {
    toast.error(error, {
      position: toast.POSITION.TOP_RIGHT
    })
  }

  async function search() {
    // setBackGround(searchTxt)
    setIsLoading(true)

    try {
      if (searchTxt !== '') {
        console.log(weather)
        const { resData } = await fetchWeather(searchTxt as string)

        if (resData.cod == 404) {
          switch (resData.message) {
            case 'city not found':
              notifyWarn(`A cidade "${searchTxt}" não foi encontrada`)
              break

            default:
              notifyError('Ocorreu algum erro')
              break
          }
        } else if (resData.cod == 200) {
          console.log(resData)

          setWeather(resData)
          setIsLoading(true)
          setSearchTxt('')
        }
      } else {
        notifyInfo()
      }
    } catch {
      setIsLoading(false)
    }
    setIsLoading(false)
  }

  async function handleOnSearchChange(searchData: {
    label: string
    value: string
  }) {
    setIsLoading(true)
    const [name, abr] = searchData.label.split(',')
    const [lat, lon] = searchData.value.split(' ')

    const { resData } = await fetchWeather(name)
    const { resForecastData } = await forecastWeather(lat, lon)

    setSearchTxt(name)
    setWeather(resData)
    setForecast(resForecastData)
    setIsLoading(false)
  }

  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault

    if (event.code === 'Enter' && searchTxt !== '') {
      search()
    }
  }

  useEffect(() => {}, [])

  return (
    <HomeContainer>
      <ToastContainer />

      <div className="container">
        <SelectSearch
          onSearchChange={handleOnSearchChange}
          buttonVisible={true}
          placeholder="Digite o nome da cidade"
          onClick={search}
        />

        {isLoading ? (
          <HashLoader color={defaultTheme.colors['brand-primary']} />
        ) : weather ? (
          <Weather data={weather} />
        ) : (
          <img src={forecastImg} alt="" />
        )}

        {forecast && <Forecast data={forecast} />}
      </div>
    </HomeContainer>
  )
}

export default Home
