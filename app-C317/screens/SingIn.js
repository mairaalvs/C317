import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingInStyle from '../styles/SingInStyle';


export default function SingIn({navigation}) {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const login = async() => {
    navigation.navigate("Group")
  }

  return (
    <View style={[SingInStyle.specificContainer]}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={SingInStyle.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={SingInStyle.logo}
        />

        <Text style={SingInStyle.title}>
          Seja bem-vindo(a)!
        </Text>
      </ImageBackground>

      <Text style={SingInStyle.subtitle}>
          Entrar
      </Text>

      <View style={SingInStyle.inputView}>
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

      <Text style={SingInStyle.password}>
        Esqueceu sua senha?
      </Text>

      <TouchableOpacity
        style={SingInStyle.buttonSingIn} 
        activeOpacity={0.5}
        onPress={() => login()}
      >
        <Text style={SingInStyle.buttonTextStyle}> 
          Entrar 
        </Text>

        <View>
          <ImageBackground 
            source={require('../assets/Circles-Arrow.png')} 
            style={SingInStyle.buttonImageIconStyle} 
          />
        </View>  
      </TouchableOpacity>
    </View>
  );
}