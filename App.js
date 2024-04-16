import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/Home";
import Contatos from './src/Contatos';
import Local from './src/Local';
import Itens from "./src/Itens";

const Stack =  createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Itens" component={Itens} />
      <Tab.Screen name="Contatos" component={Contatos} />
      <Tab.Screen name="Local" component={Local} />
    </Tab.Navigator>
  </NavigationContainer>
  );

}
