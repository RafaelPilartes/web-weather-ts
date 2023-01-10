import { useState, KeyboardEvent, useEffect, useRef } from 'react'

// Navegação
import { useNavigate } from 'react-router-dom'

// Icons
import { BsAlarm } from 'react-icons/bs'

// Styles
import { HomeContainer } from './styles'
import BaseBtn from '../../components/BaseBtn'
import FormCountdown from '../FormCountdown'

type CountdownFormProps = {
  title: string
  description: string
}

function Home() {
  const navigate = useNavigate()

  const newDate = new Date()

  const [nameCountdown, setNameCountdown] = useState<string>(
    'Nova contagem regressiva'
  )

  const [formTask, setFormTask] = useState<CountdownFormProps>({
    title: '',
    description: ''
  })

  function initCountdown(dateCountdown: Date) {
    navigate(`/${newDate}`)
    alert(dateCountdown)
  }

  function handleKeyUp(event: KeyboardEvent) {
    event.preventDefault

    if (event.code === 'Enter' && formTask.title !== '') {
    }
  }

  useEffect(() => {}, [])

  return (
    <HomeContainer>
      <div className="container">
        <FormCountdown />
      </div>
    </HomeContainer>
  )
}

export default Home
