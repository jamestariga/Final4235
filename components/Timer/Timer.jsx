import { View, Text } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'

const Timer = () => {
  const [firstTime, setFirstTime] = useState(20)
  const [secondTime, setSecondTime] = useState(10)
  const [combinedTime, setCombinedTime] = useState(0)

  useEffect(() => {
    if (firstTime !== 0) {
      const interval = setInterval(() => {
        setFirstTime((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [firstTime])

  useEffect(() => {
    if (secondTime !== 0) {
      const interval = setInterval(() => {
        setSecondTime((prev) => prev - 1)
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [secondTime])

  useEffect(() => {
    if (firstTime !== 0 && secondTime !== 0) {
      setCombinedTime(firstTime + secondTime)
    } else if (secondTime === 0) {
      setCombinedTime(firstTime)
    } else if (firstTime === 0) {
      setCombinedTime(0)
    }
  }, [firstTime, secondTime])

  if (firstTime === 0 && secondTime === 0) {
    alert('Restart the app to start the timer again')
  }

  return (
    <View className='flex-1 justify-center items-center'>
      <View className='flex-1 pt-10'>
        <View className='flex flex-row'>
          <Text className='text-xl font-bold pr-2'>Countdown Timer 1:</Text>
          <Text className='text-xl font-bold'>{firstTime}</Text>
        </View>
        <View className='flex flex-row'>
          <Text className='text-xl font-bold pr-2'>Countdown Timer 2:</Text>
          <Text className='text-xl font-bold'>{secondTime}</Text>
        </View>
      </View>
      <View className='flex-[2] items-center'>
        <Text className='text-xl font-bold'>Total Time Left:</Text>
        <Text className='text-xl font-bold'>{combinedTime}</Text>
      </View>
    </View>
  )
}

export default Timer
