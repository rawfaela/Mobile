import 'react-native-gesture-handler';
import Home from './screens/home';
import Login from './screens/login';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

export default function App() { 
  const Drawer = createDrawerNavigator();
  /* o de cima (login) é o primeiro q aparece quando abre */
  return(
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{ headerShadowVisible: false, 
        headerTitleStyle: {fontWeight: 'bold', fontSize: 20}, 
        drawerStyle: {backgroundColor: 'rgb(173, 131, 231)'},  drawerActiveTintColor: '#fff', drawerLabelStyle: {fontSize: 20}
        }}>
        <Drawer.Screen name='Login' component={Login} options={{headerStyle: {backgroundColor: 'rgb(173, 131, 231)'}, 
        }}/>

        <Drawer.Screen name='Home' component={Home} options={{headerStyle: {backgroundColor: 'rgb(225, 200, 232)'},
        }}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
