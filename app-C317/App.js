import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './style/MainStyle';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Inicio from './screens/Inicio';
import Cadastro from './screens/Cadastro';
import Principal from './screens/Principal';
import Notificacoes from './screens/Notificacoes';
import Servico from './screens/Servico';
import Educacao from './screens/Educacao';
import Perfil from './screens/Perfil';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
      <Stack.Screen name="Principal" component={Principal} options={{ headerShown: false }} />
      <Stack.Screen name="Notificacoes" component={Notificacoes} options={{ headerShown: false }} />
      <Stack.Screen name="Servico" component={Servico} options={{ headerShown: false }} />
      <Stack.Screen name="Educacao" component={Educacao} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={Perfil} options={{ headerShown: false }} />
            
    </Stack.Navigator>

    
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
