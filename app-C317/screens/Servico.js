import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Servico() {

  const [text, setText] = useState("");

  return (
    <SafeAreaView style = {specificStyle.view}>
      <View style = {specificStyle.cabecalho}>
      <TextInput 
          style = {specificStyle.input} 
          placeholder='Buscar' 
          value={text} 
          onChangeText={(value) => 
          setText(value)}
        >
        <Icon
          name="search"
          size={30}
          color='#3D56FA'
          onPress={() => {}}
        />
        </TextInput>
      </View>
      
    </SafeAreaView>
    );
}

const specificStyle = StyleSheet.create({
  view:{
    marginTop: 5
  },
  cabecalho:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input:{
    flex: 1,
    backgroundColor: "white",
    color:'#2743FD',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
  }
});