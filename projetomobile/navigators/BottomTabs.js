import 'react-native-gesture-handler';
import Home from './screens/home';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function BottomTabs() { 
  const Bottom = createBottomTabNavigator();
  /* o de cima (login) é o primeiro q aparece quando abre */
  return(
    <NavigationContainer>
      <Bottom.Navigator screenOptions={{ headerShadowVisible: false, 
        headerTitleStyle: {fontWeight: 'bold', fontSize: 20}, 
        tabBarActiveTintColor: '#fff', }}> 
        <Bottom.Screen name='Login' component={Login} options={{headerStyle: {backgroundColor: 'rgb(173, 131, 231)'}, 
        tabBarStyle: { backgroundColor: 'rgb(173, 131, 231)',}, 
        tabBarInactiveTintColor: 'rgb(138, 83, 214)',}}/>

        <Bottom.Screen name='Home' component={Home} options={{headerStyle: {backgroundColor: 'rgb(225, 200, 232)'},
         tabBarStyle: { backgroundColor: 'rgb(214, 173, 233)',},
          tabBarInactiveTintColor: 'rgb(138, 83, 214)'}}/>
      </Bottom.Navigator>
    </NavigationContainer>
  )
}
