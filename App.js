import { TailwindProvider } from 'tailwindcss-react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Cover from './components/Cover/Cover'
import TabStack from './components/TabStack/TabStack'

const Stack = createNativeStackNavigator()
const Tab = createMaterialTopTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='Final Exam App'
            options={{
              headerShown: true,
              headerTintColor: '#fff',
              headerStyle: {
                backgroundColor: '#633689',
                borderBottomWidth: 0,
                elevation: 0,
                shadowOpacity: 0,
              },
            }}
            component={TabStack}
          />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  )
}

export default App
