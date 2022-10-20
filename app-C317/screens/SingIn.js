import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Image } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function SingIn({navigation}) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const login = () => {
        //navigation.reset({
        //    index: 0,
        //    routes: [{name: "Principal"}]
        //  })
        navigation.navigate("Group")
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
          <Text style={specificStyle.title}>
            Seja {'\n'} bem-vindo(a)
          </Text>
          <Text style={specificStyle.subtitle}>Entrar</Text>

          <View style={specificStyle.inputView}>
            <Input
              placeholder = "E-mail" 
              rightIcon = {{ type: 'font-awesome', name: 'check'}} 
              onChangeText = {value => setEmail(value)} 
              keyboardType="email-address"
            />
      
            <Input
              placeholder = "Senha" 
              rightIcon = {{ type: 'font-awesome', name: 'eye'}} 
              onChangeText = {value => setPassword(value)} 
              secureTextEntry={ true }
            />
          </View>
          
    
          <Button
            icon = {
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title="Entrar"
            buttonStyle = {specificStyle.buttonLogin}
            onPress={() => login()}
          />
          </ImageBackground>
        </View>
      );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff"
    },
    
    buttonLogin: {
      left: 40,
      width: "80%",
      marginTop: 30,
      borderRadius: 50
    },

    subtitle:{
      top: 40,
      fontSize: 30,
      left: 20,
      fontWeight:'bold',
    },

    inputView:{
      color: "#3A3A3A",
      marginTop: 100,
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