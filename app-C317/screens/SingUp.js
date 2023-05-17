

import React, { useState } from 'react';
import { ImageBackground, View, Image, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
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

  const [loading , setLoading ] = useState(false);

  const validate = async() => {
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

    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
        name,
        cpf: cpf.replace(/\D/g, "")
      })
    };
    
    try {
      setLoading(true)
      const response = await fetch('http://hourglass.codando.engineer:8080/api/v1/users/register', settings)
      console.log(await response.json())
      console.log(settings.body)

      if(response.ok){
        console.log("entrou no if")
        navigation.navigate("Confirmation")
      }else{
        setInputEmailErr(true);
        setInputPasswordErr(true);
        setInputCpfErr(true);
        console.log("entrou no else")
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados do servidor');
    }
    finally{setLoading(false)}
      
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

        {loading && 
        <View style={[SignUpStyle.loading]}>
          <ActivityIndicator size="large" color="#2B47FC" />
        </View>}
      </ImageBackground>
    </View>
    );
}