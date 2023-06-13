import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react'

const Tab = createBottomTabNavigator();

import Services from './Services';
import Studies from './Studies';
import Profile from './Profile';

const Group = () => {
    return (
        <Tab.Navigator
            initialRouteName="Service"
            screenOptions={{
                tabBarActiveTintColor: '#4960F9',
            }}
        >
            {/* <Tab.Screen
                name="Mensagens"
                component={Messages}
                options={{
                    tabBarLabel: 'Mensagens',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="message-reply" color={color} size={size} />
                    ),
                }}
            /> */}

            <Tab.Screen
                navigationKey='Service'
                name="Serviços"
                component={Services}
                options={{
                    tabBarLabel: 'Serviço',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="magnify" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Educação"
                component={Studies}
                options={{
                    tabBarLabel: 'Educação',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="book" color={color} size={size} />
                    ),
                }}
            />

            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}

export default Group;
