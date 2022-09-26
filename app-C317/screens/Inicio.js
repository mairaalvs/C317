import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Inicio({navigation}) {

  const login = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Login"}]
    })
    //navigation.navigate("Login")
  }

  const cadastrar = () => {
    navigation.reset({
      index: 0,
      routes: [{name: "Cadastro"}]
    })
    //navigation.navigate("Cadastro")
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <Text h1>Seja bem-vindo(a)</Text>
     
      <Button
        icon = {
          <Icon
            name="arrow-right"
            size={15}
            color="white"
          />
        }
        title=" Entrar"
        buttonStyle = {specificStyle.button}
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
        buttonStyle = {specificStyle.button}
        onPress={() => cadastrar()}
      />
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },

  button: {
    width: "100%",
    marginTop: 10
  }
})