import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Cadastro({navigation}) {
    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cpf, setCpf] = useState(null)

    const cadastrar = () => {
        //navigation.reset({
        //    index: 0,
        //    routes: [{name: "Principal"}]
        //})
        navigation.navigate("Principal")
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
          <ImageBackground
            source={require('../assets/SignInUp.png')}
            style={specificStyle.signIn}
          >
          <Image
            source={require('../assets/Logo-White.png')}
            style={specificStyle.logo}
          />
          <Text style={specificStyle.titulo}>
            Seja {'\n'} bem-vindo(a)
          </Text>
          <Text style={specificStyle.subtitulo}>Cadastre-se</Text>
          <Input
            style={specificStyle.input} 
            placeholder = "Nome completo" 
            rightIcon = {{ type: 'font-awesome', name: 'eye' }} 
            onChangeText = {value => setNome(value)} 
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
    
          <Button
            icon = {
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title="Cadastrar-se"
            buttonStyle = {specificStyle.buttonCadastrar}
            onPress={() => cadastrar()}
          />
          </ImageBackground>
        </View>
      );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff"
    },

    buttonCadastrar: {
      left: 40,
      width: "80%",
      marginTop: 30,
      borderRadius: 50
    },

    subtitulo:{
      fontSize: 30,
      left: 20,
      fontWeight:'bold',
    },

    input:{
      color: "#fff",
    },

    titulo:{
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