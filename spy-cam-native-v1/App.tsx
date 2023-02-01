import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './src/views/Intro'
import Auth from './src/views/Auth'
import Register from './src/views/Register'

export type RootStackParamsList = {
  Intro: undefined,
  Auth: undefined,
  Register: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen 
          name="Intro"
          component={Intro}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
        />
        <Stack.Screen
          name="Register"
          component={Register}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}