import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SingIn from './screens/SingIn';
import Welcome from './screens/Welcome';
import SingUp from './screens/SingUp';
import Group from './screens/Group';
import Notification from './screens/Notification';
import Services from './screens/Services';
import Studies from './screens/Studies';
import Profile from './screens/Profile';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }} />
      <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }} />
      <Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
      <Stack.Screen name="Notification" component={Notification} options={{ headerShown: false }} />
      <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
      <Stack.Screen name="Studies" component={Studies} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            
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
