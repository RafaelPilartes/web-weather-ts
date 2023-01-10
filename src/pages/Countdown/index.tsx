import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'

// Icons
import { BsAlarm } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import BaseBtn from '../../components/BaseBtn'
import Counter from '../../components/Counter'
import useCountdown from '../../hooks/useCountdown'
import { AppContext } from '../../provider/AppProvider'
import { defaultTheme } from '../../themes/default'
import FormCountdown from '../FormCountdown'

import { CountdownTimerContainer } from './styles'

type CountdownFormProps = {
  title: string
  description: string
}

function CountdownTimer() {
  let location = useLocation()
  const navigate = useNavigate()
  const { titleCounter } = useContext(AppContext)

  const [dateCountdown, setDateCountdown] = useState<string>()
  const [isCounting, setIsCounting] = useState<boolean>(true)

  const [second, minute, hour, day, refreshIntervalId] = useCountdown(
    dateCountdown as string
  )

  function stopCountdown() {
    navigate(`/`)
    console.log(refreshIntervalId)

    clearInterval(refreshIntervalId)
  }

  console.log('ra')

  useEffect(() => {
    setIsCounting(true)

    let str = location.pathname
    str = str.substring(1)
    str = str.slice(0, -1)
    setDateCountdown(str)
  }, [location])

  return (
    <CountdownTimerContainer>
      <div className="container">
        {isCounting && (
          <div className="countdown">
            <h1> {titleCounter} </h1>

            <div className="timer">
              <Counter number={day as number} title={'Dias'} />
              <Counter number={hour as number} title={'Horas'} />
              <Counter number={minute as number} title={'Minutos'} />
              <Counter number={second as number} title={'Segundos'} />
            </div>

            <BaseBtn
              title="Parar"
              onClick={stopCountdown}
              colorBg={defaultTheme.colors['base-error-light']}
            />
          </div>
        )}

        {!isCounting && <FormCountdown />}
      </div>
    </CountdownTimerContainer>
  )
}

export default CountdownTimer
