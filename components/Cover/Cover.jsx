import { useState } from 'react'
import { View, Text, TextInput } from 'react-native'

const Cover = () => {
  const [userName, setUserName] = useState('')

  return (
    <View className='flex-1 justify-center items-center bg-white px-4'>
      <View className='flex justify-center items-center'>
        <Text className='font-bold text-3xl text-center'>
          INFO 4235 Final Exam (SUMMER 2022)
        </Text>
      </View>
      <View className='flex justify-center w-full pt-10'>
        <Text className='font-bold text-xl'>Enter your Name:</Text>
        <TextInput
          className='flex w-full bg-gray-400 p-2 placeholder:text-black text-lg'
          placeholder='Name'
          keyboardType='default'
          defaultValue={userName}
          onChangeText={(text) => setUserName(text)}
        ></TextInput>
      </View>
    </View>
  )
}

export default Cover
