

import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from '@expo/vector-icons';
import SignUpStyle from '../styles/SignUpStyle';
import { validEmail, validPassword } from "../utils/regex";

export default function SingUp({navigation}) {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpf, setCpf] = useState(null)

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);
  const [inputCpfErr, setInputCpfErr] = useState(false);

  const validate = () => {
    if (!validEmail.test(email)) {
      setInputEmailErr(true);
    } else {
      setInputEmailErr(false);
      }
    if (!validPassword.test(password)) {
      setInputPasswordErr(true);
    } else {
      setInputPasswordErr(false);
      }
    if (!validCpf.test(cpf)) {
      setInputCpfErr(true);
    } else {
      setInputCpfErr(false);
      }  
  };

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
          value = {name} 
          onChangeText = {value => setName(value)} 
        />

        <Input
          placeholder = "E-mail" 
          rightIcon = {{ type: 'font-awesome', name: 'check' }}
          value = {email}  
          onChangeText = {value => setEmail(value)} 
          keyboardType="email-address"
        />
        {inputEmailErr && <Text>Por favor digete um email valido!</Text>}

        <View style={SignUpStyle.area}>
          <TextInput
            style={SignUpStyle.inputPassword}
            placeholder="Senha"
            secureTextEntry = {password}
            value = {password}  
            onChangeText = {value => setPassword(value)} 
          />
          {inputPassordErr && <Text>Por favor digite uma senha mais segura!</Text>}

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
          value = {cpf}   
          onChangeText = {value => setCpf(value)} 
          secureTextEntry={ true }
          /* Poderia ter usado o keyboardType="number-pad" e dessa forma somente numeros seriam aceitos*/
          returnKeyType="done"
        />
        {inputCpfErr && <Text>Por favor digete um cpf valido!</Text>}
      </View>

      <TouchableOpacity
        style={SignUpStyle.buttonSingIn} 
        activeOpacity={0.5}
        onClick={validate}
        /*onPress={() => confirmation()}*/ /* verificar qual seria o + correto colocar e como incluir a lógica*/
        
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