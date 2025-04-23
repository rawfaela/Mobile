import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/home';
import Login from './screens/login';
import Feed from './screens/feed';
import Counter from './screens/counter';
import Products from './screens/products';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

function BottomTabs(){
  const Bottom = createBottomTabNavigator();

  return(
    <Bottom.Navigator
      screenOptions={{ headerShadowVisible: false, 
      headerTitleStyle: {fontWeight: 'bold', fontSize: 20}, 
      tabBarActiveTintColor: '#fff', animation: 'fade'}}> 

      <Bottom.Screen name='Home' component={Home} options={{headerStyle: {backgroundColor: 'rgb(225, 200, 232)'},
        tabBarStyle: { backgroundColor: 'rgb(214, 173, 233)',},
        tabBarIcon: ({focused}) => (<MaterialIcons name="home" size={30} color={focused ? "white" : "black"} /> )}}/>
        
      <Bottom.Screen name='Feed' component={Feed} options={{headerStyle: {backgroundColor: 'rgb(208, 157, 231)'},
        tabBarStyle: { backgroundColor: 'rgb(208, 157, 231)',},
        tabBarIcon: ({focused}) => (<MaterialIcons name="feed" size={30} color={focused ? "white" : "black"} /> )}}/>

      <Bottom.Screen name='Products' component={Products} options={{headerStyle: {backgroundColor: 'rgb(208, 157, 231)'},
        tabBarStyle: { backgroundColor: 'rgb(208, 157, 231)',},
        tabBarIcon: ({focused}) => (<MaterialIcons name="storefront" size={30} color={focused ? "white" : "black"} /> )}}/>

      <Bottom.Screen name='Counter' component={Counter} options={{headerStyle: {backgroundColor: 'rgb(208, 157, 231)'},
        tabBarStyle: { backgroundColor: 'rgb(208, 157, 231)',},
        tabBarIcon: ({focused}) => (<MaterialIcons name="calculate" size={30} color={focused ? "white" : "black"} /> )}}/>

      

    </Bottom.Navigator>
  )
}

export default function App() { 
  const Stack = createStackNavigator();

  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShadowVisible: false, headerStyle: {margin:0}, headerTitleStyle: {fontWeight: 'bold', fontSize: 20} }}> 
        <Stack.Screen name='Login' component={Login} options={{headerStyle: {backgroundColor: 'rgb(173, 131, 231)'}}}/>
        <Stack.Screen options={{headerShown: false}} name='HomeTabs' component={BottomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};