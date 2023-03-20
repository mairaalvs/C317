import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ConfirmationStyle from '../styles/ConfirmationStyle';


export default function Confirmation({navigation}) {
  const login = async() => {
    navigation.navigate("Welcome")
  }

  return (
    <View style={[ConfirmationStyle.specificContainer]}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={ConfirmationStyle.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={ConfirmationStyle.logo}
        />

        <Text style={ConfirmationStyle.title}>
          Seja bem-vindo(a)!
        </Text>
      </ImageBackground>

      <Text style={ConfirmationStyle.subtitle}>
        Um link será enviado para o seu endereço de email informado para validação da conta.
      </Text>

      <TouchableOpacity
        style={ConfirmationStyle.buttonSingIn} 
        activeOpacity={0.5}
        onPress={() => login()}
      >
        <Text style={ConfirmationStyle.buttonTextStyle}> 
          Ok 
        </Text>

        <View>
          <ImageBackground 
            source={require('../assets/Circles-Arrow.png')} 
            style={ConfirmationStyle.buttonImageIconStyle} 
          />
        </View>  
      </TouchableOpacity>
    </View>
  );
}