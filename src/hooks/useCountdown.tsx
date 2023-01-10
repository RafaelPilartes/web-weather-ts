import React, { useState } from 'react'

const useCountdown = (date: Date | string) => {
  const [second, setSecond] = useState<number>()
  const [minute, setMinute] = useState<number>()
  const [hour, setHour] = useState<number>()
  const [day, setDay] = useState<number>()

  const countdown = () => {
    const countdownDate = new Date(date).getTime()

    const now = new Date().getTime()

    const interval = countdownDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const secondNumber = Math.floor((interval % minute) / second)
    const minuteNumber = Math.floor((interval % hour) / minute)
    const hourNumber = Math.floor((interval % day) / hour)
    const dayNumber = Math.floor(interval / day)

    setSecond(secondNumber)
    setMinute(minuteNumber)
    setHour(hourNumber)
    setDay(dayNumber)
  }

  var refreshIntervalId = setInterval(() => {
    const countdownDate = new Date(date).getTime()

    const now = new Date().getTime()

    const interval = countdownDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const secondNumber = Math.floor((interval % minute) / second)
    const minuteNumber = Math.floor((interval % hour) / minute)
    const hourNumber = Math.floor((interval % day) / hour)
    const dayNumber = Math.floor(interval / day)

    setSecond(secondNumber)
    setMinute(minuteNumber)
    setHour(hourNumber)
    setDay(dayNumber)
  }, 1000)

  if (day == -1) {
    clearInterval(refreshIntervalId)
    return [0, 0, 0, 0]
  }

  return [second, minute, hour, day, refreshIntervalId]
}

export default useCountdown
