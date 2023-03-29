

import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import SignUpStyle from '../styles/SignUpStyle';

export default function SingUp({navigation}) {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [cpf, setCpf] = useState(null)

  const confirmation = () => {
    navigation.navigate("Confirmation")
}

  return (
    <View style={SignUpStyle.specificContainer}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={SignUpStyle.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={SignUpStyle.logo}
        />

        <Text style={SignUpStyle.title}>
          Seja bem-vindo(a)!
        </Text>
      </ImageBackground>

      <Text style={SignUpStyle.subtitle}>
        Cadastre-se:
      </Text>

      <View style={SignUpStyle.inputView}>
        <Input
          placeholder = "Nome completo" 
          rightIcon = {{ type: 'font-awesome', name: 'eye' }} 
          onChangeText = {value => setName(value)} 
        />

        <Input
          placeholder = "E-mail" 
          rightIcon = {{ type: 'font-awesome', name: 'check' }} 
          onChangeText = {value => setEmail(value)} 
          keyboardType="email-address"
        />

        <View style={SignUpStyle.area}>
          <TextInput
            style={SignUpStyle.inputPassword}
            placeholder="Senha"
            secureTextEntry = {password}
          />

          <TouchableOpacity onPress={() => setPassword(!password)}>
            {password == true ?
              <FontAwesome5 name="eye-slash" size={24} color="black" />
              :
              <FontAwesome5 name="eye" size={24} color="black" />
            }
          </TouchableOpacity>
        </View>

        <Input
          placeholder = "CPF" 
          rightIcon = {{ type: 'font-awesome', name: 'check' }} 
          onChangeText = {value => setCpf(value)} 
          secureTextEntry={ true }
          /* Poderia ter usado o keyboardType="number-pad" e dessa forma somente numeros seriam aceitos*/
          returnKeyType="done"
        />
      </View>

      <TouchableOpacity
        style={SignUpStyle.buttonSingIn} 
        activeOpacity={0.5}
        onPress={() => confirmation()}
      >
        <Text style={SignUpStyle.buttonTextStyle}> 
          Cadastrar 
        </Text>

        <View>
          <ImageBackground 
            source={require('../assets/Circles-Arrow.png')} 
            style={SignUpStyle.buttonImageIconStyle} 
          /> 
        </View>  
      </TouchableOpacity>
    </View>
    );
}