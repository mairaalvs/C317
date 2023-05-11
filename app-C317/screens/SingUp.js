

import React, { useState } from 'react';
import { ImageBackground, View, Image, TouchableOpacity } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import SignUpStyle from '../styles/SignUpStyle';
import { validEmail, validPassword, validCpf } from "../utils/regex";

export default function SingUp({navigation}) {
  const [name, setName] = useState(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpf, setCpf] = useState("")

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
    if((validEmail.test(email)) && (validPassword.test(password)) && (validCpf.test(cpf))){
      navigation.navigate("Confirmation")
    }
  };

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
      
        <Text style={SignUpStyle.subtitle}>
          Cadastre-se:
        </Text>

        <View style={SignUpStyle.inputView}>
          <View style={SignUpStyle.area}>
          <Input
            style={SignUpStyle.name} 
            placeholder = "Nome completo" 
            value = {name} 
            onChangeText = {value => setName(value)} 
          />
          </View>

          <View style={SignUpStyle.area}>
          <Input style={SignUpStyle.inputEmail}
            placeholder = "E-mail" 
            value = {email}  
            onChangeText = {value => setEmail(value)} 
            keyboardType="email-address"
          />
          </View>
          {inputEmailErr && <Text style={SignUpStyle.messageErrorEmail}>Por favor digete um email valido!</Text>}

          <View style={SignUpStyle.area}>
            <Input
              style={SignUpStyle.inputPassword}
              placeholder="Senha"
              secureTextEntry = {password}
              value = {password}  
              onChangeText = {value => setPassword(value)} 
            />

            <TouchableOpacity onPress={() => setPassword(!password)}>
              {password == true ?
                <FontAwesome5 name="eye-slash" size={24} color="black" />
                :
                <FontAwesome5 name="eye" size={24} color="black" />
              } 
            </TouchableOpacity>
          </View>
          {inputPassordErr && <Text style={SignUpStyle.messageErrorPassword}>Por favor digite uma senha mais segura!</Text>}

          <View style={SignUpStyle.area}>
          <Input
            style={SignUpStyle.cpf}
            placeholder = "CPF"
            value = {cpf}   
            onChangeText = {value => setCpf(value)} 
            secureTextEntry={ false }
            returnKeyType="done"
          />
          </View>
          {inputCpfErr && <Text style={SignUpStyle.messageErrorCpf}>Por favor digete um cpf valido!</Text>}
        </View>

        <TouchableOpacity
          style={SignUpStyle.buttonSingIn} 
          activeOpacity={0.5}
          onClick={validate}
          onPress={() => validate()} 
          
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
      </ImageBackground>
    </View>
    );
}