import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SingIn from './screens/SingIn';
import Welcome from './screens/Welcome';
import SingUp from './screens/SingUp';
import Group from './screens/Group';
import Messages from './screens/Messages';
import Services from './screens/Services';
import Studies from './screens/Studies';
import Profile from './screens/Profile';
import Chat from './screens/Chat';
import Profile2 from './screens/Profile2';
import Studies2 from './screens/Studies2';
import Redirection from './screens/Redirection';
import Confirmation from './screens/Confirmation';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
      <Stack.Screen name="SingIn" component={SingIn} options={{ headerShown: false }} />
      <Stack.Screen name="SingUp" component={SingUp} options={{ headerShown: false }} />
      <Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
      <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} />
      <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
      <Stack.Screen name="Studies" component={Studies} options={{ headerShown: false }} />
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
      <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} />
      <Stack.Screen name="Profile2" component={Profile2} options={{ headerShown: false }} />
      <Stack.Screen name="Studies2" component={Studies2} options={{ headerShown: false }} />
      <Stack.Screen name="Redirection" component={Redirection} options={{ headerShown: false }} />
      <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} />
            
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
