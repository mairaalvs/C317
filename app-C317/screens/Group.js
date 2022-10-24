import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Notification from './Notification';
import Services from './ServicoChat';
import Studies from './Studies';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

export default function Group() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#4960F9',
      }}
    >
      <Tab.Screen
        name="Notificacoes"
        component={Notification}
        options={{
          tabBarLabel: 'Notificações',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="bell" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Servico"
        component={Services}
        options={{
          tabBarLabel: 'Serviço',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="magnify" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Educacao"
        component={Studies}
        options={{
          tabBarLabel: 'Educação',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}