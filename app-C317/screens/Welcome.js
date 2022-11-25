import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

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
    <View style={[styles.container, specificStyle.specificContainer]}>   
      <ImageBackground
        source={require('../assets/Welcome.png')}
        style={specificStyle.welcome}
      >
      <Image
        source={require('../assets/Hourglass.png')}
        style={specificStyle.logo}
      />
      <Text style={specificStyle.title}>
        Seja bem-vindo(a) ao Hourglass
      </Text>
      
      <TouchableOpacity
          style={specificStyle.buttonSingIn} 
          activeOpacity={0.5}
          onPress={() => login()} >
          <Text style={specificStyle.buttonTextStyle}> 
            Entrar 
          </Text> 
          <View>
          <ImageBackground 
            source={require('../assets/Circles-Arrow.png')} 
            style={specificStyle.buttonImageIconStyle} 
          /> 
          </View>  
        </TouchableOpacity>

      
      
      <TouchableOpacity
            style={specificStyle.buttonSingIn2} 
            activeOpacity={0.5}
            onPress={() => singUp()} >
            <Text style={specificStyle.buttonTextStyle2}> 
              Cadastre-se 
            </Text> 
            <View>
            <ImageBackground 
              source={require('../assets/Arrow.png')} 
              style={specificStyle.buttonImageIconStyle2} 
            /> 
            </View>  
      </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },

  buttonLogin: {
    left: 40,
    width: "80%",
    marginTop: 300,
    borderRadius: 16,
    backgroundColor: '#4960F9',
  },

  buttonSingUp: {
    left: 40,
    width: "80%",
    marginTop: 15,
    borderRadius: 16,
    backgroundColor: '#FFF',
    borderWidth: '1.5',
    borderColor: '#4960F9',
    
  },

  buttonText: {
    color: '#4960F9', 
  },

  buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,  
    width: "80%",
    marginTop: 280, 
    borderRadius: 16, 
  },

  buttonImageIconStyle: {
    right: 2,
    padding: 22.5,
    height: 40,
    width: 60,
    resizeMode: 'contain',
  },

  buttonTextStyle: {
    color: '#fff', 
    marginLeft: 15,
    fontSize: 18,
 
  },

  title:{
    padding: 40,
    fontSize: 32,
    left: 3,
    textAlign: 'left',
    color: "#fff",
    shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4.65,
    marginTop: 25
  },

  logo:{
    top: 40,
    left: 45,
  },

  welcome:{
    width: "100%", 
    height: "100%",
  },

  buttonSingIn2: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    height: 45,
    left: 40,  
    width: "80%",
    marginTop: 10, 
    borderRadius: 16,
    borderWidth: 2,
    borderColor:  '#2743FB'
  },

  buttonTextStyle2: {
    color: '#2743FB', 
    marginLeft: 15,
    fontSize: 18,
  
  },

  buttonImageIconStyle2: {
    right: 10,
    height: 20,
    width: 25,
    resizeMode: 'contain',
  },

})