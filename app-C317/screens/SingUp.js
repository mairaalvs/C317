

import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function SingUp({navigation}) {
    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cpf, setCpf] = useState(null)

    const singUp = () => {
        //navigation.reset({
        //    index: 0,
        //    routes: [{name: "Principal"}]
        //})
        navigation.navigate("Group")
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
          <ImageBackground
            source={require('../assets/SignInUp.png')}
            style={specificStyle.signIn}
          >
          <Image
            source={require('../assets/Hourglass.png')}
            style={specificStyle.logo}
          />
          <Text style={specificStyle.title}>
            Seja {'\n'} bem-vindo(a)
          </Text>
          <Text style={specificStyle.subtitle}>Cadastre-se</Text>
          <Input
            style={specificStyle.input} 
            placeholder = "Nome completo" 
            rightIcon = {{ type: 'font-awesome', name: 'eye' }} 
            onChangeText = {value => setName(value)} 
          />

          <Input
            style={specificStyle.input} 
            placeholder = "E-mail" 
            rightIcon = {{ type: 'font-awesome', name: 'check' }} 
            onChangeText = {value => setEmail(value)} 
            keyboardType="email-address"
          />
    
          <Input
            style={specificStyle.input} 
            placeholder = "Senha" 
            rightIcon = {{ type: 'font-awesome', name: 'eye' }} 
            onChangeText = {value => setPassword(value)} 
            secureTextEntry={ true }
          />

          <Input
            style={specificStyle.input} 
            placeholder = "CPF" 
            rightIcon = {{ type: 'font-awesome', name: 'check' }} 
            onChangeText = {value => setCpf(value)} 
            secureTextEntry={ true }
            /* Poderia ter usado o keyboardType="number-pad" e dessa forma somente numeros seriam aceitos*/
            returnKeyType="done"
          /> 
    
          <TouchableOpacity
            style={specificStyle.buttonSingIn} 
            activeOpacity={0.5}
            onPress={() => singUp()} >
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
          </ImageBackground>
        </View>
      );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff"
    },

    buttonSingUp: {
      left: 40,
      width: "80%",
      marginTop: 30,
      borderRadius: 16,
      backgroundColor: '#4960F9',
    },

    subtitle:{
      fontSize: 30,
      left: 20,
      fontWeight:'bold',
    },

    buttonSingIn: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: '#4960F9',
      height: 45,
      left: 40,  
      width: "80%",
      marginTop: 28, 
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

    input:{
      color: "#fff",
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

    signIn:{
      flex: 1,
      width: 380, 
      height: 340,
    }
  })