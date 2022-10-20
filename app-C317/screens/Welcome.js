import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
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
        source={require('../assets/Logo-White.png')}
        style={specificStyle.logo}
      />
      <Text style={specificStyle.title}>
        Seja {'\n'} bem-vindo(a)
      </Text>
      <Button
        icon = {
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title="Entrar"
        buttonStyle = {specificStyle.buttonLogin}
        onPress={() => login()}
      />

      <Button
        icon = {
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title=" Cadastre-se"
        buttonStyle = {specificStyle.buttonSingUp}
        onPress={() => singUp()}
      />
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
    borderRadius: 50,
  },

  buttonSingUp: {
    left: 40,
    width: "80%",
    marginTop: 40,
    borderRadius: 50,
    
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
  },

  logo:{
    top: 40,
    left: 45,
  },

  welcome:{
    width: "100%", 
    height: "100%",
  }

})