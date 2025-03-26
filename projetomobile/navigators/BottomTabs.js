import 'react-native-gesture-handler';
import Home from './screens/home';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() { 
  const Bottom = createBottomTabNavigator();
  /* o de cima (login) é o primeiro q aparece quando abre -- pra nao acontecer isso: initialRouteName */
  //! ver como faz icone focused
  return(
    <NavigationContainer>
      <Bottom.Navigator initialRouteName='Login'
        screenOptions={{ headerShadowVisible: false, 
        headerTitleStyle: {fontWeight: 'bold', fontSize: 20}, 
        tabBarActiveTintColor: '#fff',
        animation: 'shift'}}> 

        <Bottom.Screen name='Login' component={Login} options={{headerStyle: {backgroundColor: 'rgb(173, 131, 231)'}, 
        tabBarStyle: { backgroundColor: 'rgb(173, 131, 231)',}, 
        tabBarInactiveTintColor: 'rgb(138, 83, 214)',
        tabBarIcon: () => (<MaterialIcons name="login" size={24} color="black" />)
      }}/>

        <Bottom.Screen name='Home' component={Home} options={{headerStyle: {backgroundColor: 'rgb(225, 200, 232)'},
         tabBarStyle: { backgroundColor: 'rgb(214, 173, 233)',},
          tabBarInactiveTintColor: 'rgb(138, 83, 214)',
          tabBarIcon: () => (<MaterialIcons name="home" size={24} color="black" /> )}}/>
      </Bottom.Navigator>
    </NavigationContainer>
  )
}
