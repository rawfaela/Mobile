import { View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';
import 'react-native-gesture-handler';
//comentar um e descomentar o outro pra ver certo (se nao a tela fica dividida)

export default function App() { 
  return (
    <View style={{flex:1}}>
    <Login/>
    <Home/>
    </View>
  );
}
