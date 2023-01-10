import { useState, KeyboardEvent, useEffect, useRef, useContext } from 'react'

// Icons
import { BsAlarm } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import BaseBtn from '../../components/BaseBtn'
import { docSpecialDates } from '../../data/specialDates'
import useCountdown from '../../hooks/useCountdown'
import { AppContext } from '../../provider/AppProvider'

import { FormCountdownContainer } from './styles'

type CountdownFormProps = {
  nameCountdown: string
  dateCountdown: string
}

function FormCountdown() {
  const navigate = useNavigate()
  const { titleCounter, setTitleCounter } = useContext(AppContext)

  const [formCount, setFormCount] = useState<CountdownFormProps>({
    nameCountdown: 'Nova contagem regressiva',
    dateCountdown: ''
  })

  function initCountdown(dateCountdown: string) {
    navigate(`/${dateCountdown}`)
  }
  function initCountdownToDate(dateCountdown: string, nameCountdown: string) {
    setTitleCounter(nameCountdown)
    navigate(`/${dateCountdown}`)
  }
  function changeDateCountdown(ev: any) {
    if (!ev.target['validity'].valid) return
    const dt = ev.target['value'] + ':00Z'

    setFormCount({ ...formCount, dateCountdown: dt })

    console.log(dt)
  }
  function changeTitleCountdown(title: string) {
    setTitleCounter(title)
  }

  const listSpecialDates = docSpecialDates.map((item, index) => (
    <button
      key={index}
      className="SpecialDates"
      onClick={() => {
        initCountdownToDate(item.date, item.title)
      }}
    >
      <BsAlarm /> <span>{item.title}</span>
    </button>
  ))

  useEffect(() => {}, [])

  return (
    <FormCountdownContainer>
      <div className="containerCountdown">
        <div className="containerDateCountdown">
          <h1>Criar uma contagem regressiva</h1>
          <input
            type="datetime-local"
            value={(formCount.dateCountdown || '').toString().substring(0, 16)}
            className="dateCountdown"
            onChange={e => changeDateCountdown(e as any)}
          />
        </div>

        <div className="containerSpecialDates">{listSpecialDates}</div>

        <div className="containerNameCountdown">
          <h1>Nome da contagem regressiva</h1>
          <input
            type="text"
            value={titleCounter}
            onChange={e => changeTitleCountdown(e.target.value)}
            className="nameCountdown"
          />
        </div>

        <BaseBtn
          title="Iniciar"
          onClick={() => initCountdown(formCount.dateCountdown)}
        />
      </div>
    </FormCountdownContainer>
  )
}

export default FormCountdown
