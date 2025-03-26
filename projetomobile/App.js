import { View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';
import 'react-native-gesture-handler';

import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//comentar um e descomentar o outro pra ver certo (se nao a tela fica dividida)


export const MyStack = createStackNavigator({
  screens: { /* o da frente aparece em cima da tela */
    Login: Login,
    Home: Home,
  },
});

const Navigation = createStaticNavigation(MyStack);


export default function App() { 
  return <Navigation />;
}

/* return (
  <View style={{flex:1}}>
  <Login/>
  <Home/> 
  </View>
); */

