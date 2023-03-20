import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SignInStyle from '../styles/SignInStyle';


export default function SingIn({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const login = async() => {
    navigation.navigate("Group")
  }
  const recoverPassword = async() => {
    navigation.navigate("Redirection")
  }

  return (
    <View style={[SignInStyle.specificContainer]}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={SignInStyle.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={SignInStyle.logo}
        />

        <Text style={SignInStyle.title}>
          Seja bem-vindo(a)!
        </Text>
      </ImageBackground>

      <Text style={SignInStyle.subtitle}>
          Entrar:
      </Text>

      <View style={SignInStyle.inputView}>
        <Input
          placeholder = "E-mail" 
          rightIcon = {{ type: 'font-awesome', name: 'check'}} 
          onChangeText = {value => setEmail(value)} 
          keyboardType="email-address"
        />
  
        <Input
          placeholder = "Senha" 
          rightIcon = {{ type: 'font-awesome', name: 'eye'}} 
          onChangeText = {value => setPassword(value)} tonTextStyle
          secureTextEntry={ true }
        />
      </View>

      <Text 
        style={SignInStyle.password}
        onPress={() => recoverPassword()}
      >
        Esqueceu sua senha?
      </Text>

      <TouchableOpacity
        style={SignInStyle.buttonSingIn} 
        activeOpacity={0.5}
        onPress={() => login()}
      >
        <Text style={SignInStyle.buttonTextStyle}> 
          Entrar 
        </Text>

        <View>
          <ImageBackground 
            source={require('../assets/Circles-Arrow.png')} 
            style={SignInStyle.buttonImageIconStyle} 
          />
        </View>  
      </TouchableOpacity>
    </View>
  );
}