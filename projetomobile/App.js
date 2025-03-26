import 'react-native-gesture-handler';
import Home from './screens/home';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() { 
  const Stack = createStackNavigator();
  /* o de cima (login) é o primeiro q aparece quando abre */
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShadowVisible: false, headerStyle: {margin:0}, headerTitleStyle: {fontWeight: 'bold', fontSize: 20}, }}> 
        <Stack.Screen name='Login' component={Login} options={{headerStyle: {backgroundColor: 'rgb(173, 131, 231)'}}}/>
        <Stack.Screen name='Home' component={Home} options={{headerStyle: {backgroundColor: 'rgb(225, 200, 232)'}}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
