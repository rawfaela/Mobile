import { View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';


export default function App() { 
  return (
    <View style={{flex:1}}>
    {/* <Home/> */}
    <Login/>
    </View>
  );
}
