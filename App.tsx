import { AuthProvider, useAuth } from './app/context/AuthContext';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import Group from './app/screens/Group';
import Register from './app/screens/Register';
import Welcome from './app/screens/Welcome';
import Services from './app/screens/Services';
import Studies from './app/screens/Studies';
import Profile from './app/screens/Profile';
import ProfileService from './app/screens/ProfileService';
import Studies2 from './app/screens/Studies2';
import Redirection from './app/screens/Redirection';
import Confirmation from './app/screens/Confirmation';
import ProfileSettings from './app/screens/ProfileSettings';
import { StackParamList } from './app/types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  return (
    <AuthProvider>
      <Layout></Layout>
    </AuthProvider>
  );
}

export const Layout = () => {
  const { authState } = useAuth();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authState?.authenticated ? (
          <>
            <Stack.Screen name="Group" component={Group} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Messages" component={Messages} options={{ headerShown: false }} /> */}
            <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
            <Stack.Screen name="Studies" component={Studies} options={{ headerShown: false }} />
            <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
            {/* <Stack.Screen name="Chat" component={Chat} options={{ headerShown: false }} /> */}
            <Stack.Screen name="ProfileService" component={ProfileService} options={{ headerShown: false }} />
            <Stack.Screen name="Studies2" component={Studies2} options={{ headerShown: false }} />

            <Stack.Screen name="ProfileSettings" component={ProfileSettings} options={{ headerShown: false }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Welcome" component={Welcome} options={{ headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Confirmation" component={Confirmation} options={{ headerShown: false }} />
            <Stack.Screen name="Redirection" component={Redirection} options={{ headerShown: false }} />
          </>
        )
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}
