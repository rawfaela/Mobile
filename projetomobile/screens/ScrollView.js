import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import Profile from '../components/profile';
import Teste from '../components/atv';
import Home from './home';
import Login from './login';


export default function ScrollView() { 
  return (
/*     <ScrollView showsVerticalScrollIndicator={false}>
    </ScrollView> */  //*no lugar da view, pra ter scroll e nao aparecer a barra
    <View style={{flex:1}}>
    <Home/>
    <Login/>
    </View>
  );
}