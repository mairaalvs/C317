import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function ServicoChat({navigation}) {

  const chat = () => {
    navigation.navigate("Chat")
  }

  return (
    <View style={specificStyle.specificContainer} >
      <Text style={specificStyle.text} >Nome do usuario</Text>
      <TextInput style={specificStyle.input} />
      <TouchableOpacity
      onPress={() => chat()} >
          <Text style={specificStyle.button} > 
            Entrar 
          </Text>  
        </TouchableOpacity>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
  }, 

  text: {
    marginTop: 10,
    fontSize: 20,
  },

  input: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
  },

  button: {
    marginTop: 10,
    fontSize: 20,
  },
})