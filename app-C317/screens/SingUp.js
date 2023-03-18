

import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import SingUnStyle from '../styles/SingUpStyle';

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
    <View style={SingUnStyle.specificContainer}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={SingUnStyle.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={SingUnStyle.logo}
        />

        <Text style={SingUnStyle.title}>
          Seja bem-vindo(a)!
        </Text>
      </ImageBackground>

      <Text style={SingUnStyle.subtitle}>
        Cadastre-se:
      </Text>

      <View style={SingUnStyle.inputView}>
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

        <Input
          placeholder = "Senha" 
          rightIcon = {{ type: 'font-awesome', name: 'eye' }} 
          onChangeText = {value => setPassword(value)} 
          secureTextEntry={ true }
        />

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
        style={SingUnStyle.buttonSingIn} 
        activeOpacity={0.5}
        onPress={() => singUp()}
      >
        <Text style={SingUnStyle.buttonTextStyle}> 
          Cadastrar 
        </Text>

        <View>
          <ImageBackground 
            source={require('../assets/Circles-Arrow.png')} 
            style={SingUnStyle.buttonImageIconStyle} 
          /> 
        </View>  
      </TouchableOpacity>
    </View>
    );
}