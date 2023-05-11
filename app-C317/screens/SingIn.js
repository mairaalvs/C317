import React, { useState } from 'react';
import { ImageBackground, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Input, Text } from 'react-native-elements';
import { FontAwesome5 } from '@expo/vector-icons';
import { validEmail, validPassword } from "../utils/regex";
import SignInStyle from '../styles/SignInStyle';

export default function SingIn({navigation}) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState(true)

  const [inputEmailErr, setInputEmailErr] = useState(false);
  const [inputPassordErr, setInputPasswordErr] = useState(false);

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
    if((validEmail.test(email)) && (validPassword.test(password))){
      navigation.navigate("Group")
    }
  };

  const login = async() => {
    navigation.navigate("Group")
  }
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
          {inputEmailErr && <Text style={SignInStyle.messageErrorEmail}>Por favor digete um email valido!</Text>}
    
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
          {inputPassordErr && <Text style={SignInStyle.messageErrorPassword}>Senha incorreta!</Text>}
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
      </ImageBackground>
    </View>
  );
}