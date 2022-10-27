import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function ServicoChat({navigation}) {

  const [name, setName] = useState("")

  const chat = () => {
    navigation.navigate("Chat")
  }

  return (
    <View style={specificStyle.specificContainer} >
        <View>
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
        

      <Text style={specificStyle.textSubTitle} >Ana Luiza</Text>
      <Text style={specificStyle.textName} >Faxineiro(a) R$250</Text>
      <TouchableOpacity
        onPress= {() => chat()} >
        <Text style={specificStyle.button} > 
          Ana Luiza 
        </Text>
        <Text> Faxineiro(a) R$250 </Text>  
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

  textName: {
    marginTop: 10,
    fontSize: 20,
  },

  button: {
    marginTop: 10,
    fontSize: 20,
  },

  header:{
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
})