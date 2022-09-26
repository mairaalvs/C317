import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';


export default function Login(navigation) {

    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)

    const entrar = () => {
        //navigation.reset({
        //    index: 0,
        //    routes: [{name: "Cadastro"}]
        //  })
        navigation.navigate("Inicio")
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
          <Text h1>Seja bem-vindo(a)</Text>
          <Text h3>Entrar</Text>
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
    
          <Button
            icon = {
              <Icon
                name="arrow-right"
                size={15}
                color="white"
              />
            }
            title="Entrar"
            onPress={() => entrar()}
          />
        </View>
      );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff"
    }
  })