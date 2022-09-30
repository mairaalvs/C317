import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Login({navigation}) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () => {
        //navigation.reset({
        //    index: 0,
        //    routes: [{name: "Principal"}]
        //  })
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
          <Text style={specificStyle.subtitulo}>Entrar</Text>
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
    
          <Button
            icon = {
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title="Entrar"
            buttonStyle = {specificStyle.buttonEntrar}
            onPress={() => entrar()}
          />
          </ImageBackground>
        </View>
      );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff"
    },
    
    buttonEntrar: {
      width: "100%",
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