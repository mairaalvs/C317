import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import WelcomeStyle from '../styles/WelcomeStyle';

export default function Welcome({navigation}) {

  const login = () => {
    //navigation.reset({
    //  index: 0,
    //  routes: [{name: "Login"}]
    //})
    navigation.navigate("SingIn")
  }

  const singUp = () => {
    //navigation.reset({
    //  index: 0,
    //  routes: [{name: "Cadastro"}]
    //})
    navigation.navigate("SingUp")
  }

  return (
    <View style={[WelcomeStyle.specificContainer]}>   
      <ImageBackground
        source={require('../assets/Welcome.png')}
        style={WelcomeStyle.welcome}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={WelcomeStyle.logo}
        />
        
        <Text style={WelcomeStyle.title}>
          Seja bem-vindo(a) ao Hourglass
        </Text>
        
        <TouchableOpacity
          style={WelcomeStyle.buttonSingIn} 
          activeOpacity={0.5}
          onPress={() => login()}
        >
          <Text style={WelcomeStyle.buttonTextStyle}> 
            Entrar 
          </Text>

          <View>
            <ImageBackground 
              source={require('../assets/Circles-Arrow.png')} 
              style={WelcomeStyle.buttonImageIconStyle} 
            /> 
          </View>  
        </TouchableOpacity>

        <TouchableOpacity
          style={WelcomeStyle.buttonSingIn2} 
          activeOpacity={0.5}
          onPress={() => singUp()}
        >
          <Text style={WelcomeStyle.buttonTextStyle2}> 
            Cadastre-se 
          </Text>

          <View>
            <ImageBackground 
              source={require('../assets/Arrow.png')} 
              style={WelcomeStyle.buttonImageIconStyle2} 
            /> 
          </View>  
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}