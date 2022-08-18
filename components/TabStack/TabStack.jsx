import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Cover from '../Cover/Cover'
import Map from '../Map/Map'
import Timer from '../Timer/Timer'

const Tab = createMaterialTopTabNavigator()

const TabStack = () => {
  return (
    <Tab.Navigator
      initialRouteName='Final Exam'
      screenOptions={{
        style: {
          backgroundColor: '#633689',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#87B56A',
          borderBottomWidth: 2,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'white',
        tabBarStyle: {
          height: 55,
          backgroundColor: '#633689',
          color: '#fff',
          borderTopWidth: 1,
          borderTopColor: '#333',
        },
        tabBarLabelStyle: {
          fontSize: 14,
          margin: 0,
        },
      }}
    >
      <Tab.Screen
        name='Cover'
        component={Cover}
        options={{
          tabBarLabel: 'Cover',
        }}
      />
      <Tab.Screen
        name='Map'
        component={Map}
        options={{
          tabBarLabel: 'Map',
        }}
      />
      <Tab.Screen
        name='Timer'
        component={Timer}
        options={{
          tabBarLabel: 'Timer',
        }}
      />
    </Tab.Navigator>
  )
}

export default TabStack
