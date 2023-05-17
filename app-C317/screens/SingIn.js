import React, { useState } from 'react';
import { ImageBackground, View, Image, TouchableOpacity, TextInput, Alert, ActivityIndicator } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { validEmail, validPassword } from "../utils/regex";
import SignInStyle from '../styles/SignInStyle';

export default function SingIn({navigation}) {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);

  const [loading , setLoading ] = useState(false);

  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

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

    const settings = {
      method: 'POST',
      headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "username": email,
        "password": password
      })
    };  

    try {
      setLoading(true)
      await sleep(5000)
      const response = await fetch('http://hourglass.codando.engineer:8080/api/v1/users/authenticate', settings)

      if(response.ok){
        navigation.navigate("Group")
      }else{
        setInputEmailErr(true);
        setInputPasswordErr(true);
      }
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível carregar os dados do servidor');
    }
    finally{setLoading(false)}
  };

  const recoverPassword = async() => {
    navigation.navigate("Redirection")
  }

  return (
    <View style={[SignInStyle.specificContainer]}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={SignInStyle.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={SignInStyle.logo}
        />

        <Text style={SignInStyle.title}>
          Seja bem-vindo(a)!
        </Text>

        <Text style={SignInStyle.subtitle}>
            Entrar:
        </Text>

        <View style={SignInStyle.inputView}>
          <View style={SignInStyle.area}>
          <Input
            style={SignInStyle.inputEmail}
            placeholder = "E-mail"
            value = {email}
            onChangeText = {value => setEmail(value)} 
            keyboardType="email-address"
          />
          </View>
          {inputEmailErr && <Text style={SignInStyle.messageErrorEmail}>Verifique se o email digitado esta correta!</Text>}
    
          <View style={SignInStyle.area}>
            <TextInput
              style={SignInStyle.inputPassword}
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
          {inputPassordErr && <Text style={SignInStyle.messageErrorPassword}>Verifique se a senha digitada esta correto!</Text>}
        </View>

        <Text 
          style={SignInStyle.password}
          onPress={() => recoverPassword()}
        >
          Esqueceu sua senha?
        </Text>
        
        <TouchableOpacity
          style={SignInStyle.buttonSingIn} 
          activeOpacity={0.5}
          onPress={() => validate()}
        >
          <Text style={SignInStyle.buttonTextStyle}> 
            Entrar 
          </Text>

          <View>
            <ImageBackground 
              source={require('../assets/Circles-Arrow.png')} 
              style={SignInStyle.buttonImageIconStyle} 
            />
          </View>  
        </TouchableOpacity>

        {loading && 
        <View style={[SignInStyle.loading]}>
          <ActivityIndicator size="large" color="#2B47FC" />
        </View>}
      </ImageBackground>
    </View>
  );
}