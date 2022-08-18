import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import MapView from 'react-native-maps'

const Map = (props) => {
  const { userName } = props
  const [lat, setLat] = useState(37.78825)
  const [long, setLong] = useState(-122.4324)
  const [newLat, setNewLat] = useState(0)
  const [newLong, setNewLong] = useState(0)

  // handle press that will grab the value of lat and long
  const handlePress = () => {
    setNewLat(lat)
    setNewLong(long)
  }

  return (
    <View className='flex-1 p-2'>
      <Text className='text-bold text-xl'>Welcome, {userName}!</Text>
      <View className='flex-1 space-y-4 pt-10'>
        <Text className='text-bold text-lg'>Where do you live?</Text>
        <View className='flex-1 flex-row items-center space-x-2'>
          <Text className='text-bold text-lg'>Longitude:</Text>
          <TextInput
            className='flex w-2/4 bg-gray-300 p-1 placeholder:text-black text-lg'
            placeholder=''
            keyboardType='default'
            defaultValue={long}
            onChangeText={(text) => setLong(Number(text))}
          />
        </View>
        <View className='flex-1 flex-row items-center space-x-2'>
          <Text className='text-bold text-lg pr-4'>Latitude:</Text>
          <TextInput
            className='flex w-2/4 bg-gray-300 p-1 placeholder:text-black text-lg'
            placeholder=''
            keyboardType='default'
            defaultValue={lat}
            onChangeText={(text) => setLat(Number(text))}
          />
        </View>
        <TouchableOpacity
          onPress={handlePress}
          className='bg-gray-500 w-1/4 p-2 rounded-lg'
        >
          <Text className='text-bold text-lg text-white text-center'>
            Submit
          </Text>
        </TouchableOpacity>
      </View>
      <MapView
        initialRegion={{
          latitude: lat,
          longitude: long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        mapType='mutedStandard'
        className='flex-[20] justify-end items-center mt-6 z-0'
      >
        <MapView.Marker
          coordinate={{ latitude: newLat, longitude: newLong }}
          identifier='origin'
          pinColor='#333'
        />
      </MapView>
    </View>
  )
}

export default Map
