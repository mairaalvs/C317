import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import RedirectionStyle from '../styles/RedirectionStyle';


export default function Redirection({navigation}) {
  const login = async() => {
    navigation.navigate("Welcome")
  }

  return (
    <View style={[RedirectionStyle.specificContainer]}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={RedirectionStyle.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={RedirectionStyle.logo}
        />

        <Text style={RedirectionStyle.title}>
          Seja bem-vindo(a)!
        </Text>
      </ImageBackground>

      <Text style={RedirectionStyle.subtitle}>
        Digite o endereço de email da sua conta. Um link* será enviado para criação de uma nova senha.
      </Text>

      <View style={RedirectionStyle.inputView}>
        <Input
          placeholder = "E-mail" 
          rightIcon = {{ type: 'font-awesome', name: 'check'}} 
          onChangeText = {value => setEmail(value)} 
          keyboardType="email-address"
        />
      </View>

      <TouchableOpacity
        style={RedirectionStyle.buttonSingIn} 
        activeOpacity={0.5}
        onPress={() => login()}
      >
        <Text style={RedirectionStyle.buttonTextStyle}> 
          Enviar 
        </Text>

        <View>
          <ImageBackground 
            source={require('../assets/Circles-Arrow.png')} 
            style={RedirectionStyle.buttonImageIconStyle} 
          />
        </View>  
      </TouchableOpacity>
    </View>
  );
}