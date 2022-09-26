import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Cadastro() {
    const [nome, setNome] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [cpf, setCpf] = useState(null)

    const cadastrar = () => {
        //navigation.reset({
        //    index: 0,
        //    routes: [{name: "Cadastro"}]
        //  })
        navigation.navigate("Inicio")
    }

    return (
        <View style={[styles.container, specificStyle.specificContainer]}>
          <Text h1>Seja bem-vindo(a)</Text>
          <Text h3>Cadastre-se</Text>
          <Input 
            placeholder = "Nome completo" 
            rightIcon = {{ type: 'font-awesome', name: 'eye' }} 
            onChangeText = {value => setNome(value)} 
            keyboardType="name"
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
            onPress={() => cadastrar()}
          />
        </View>
      );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#fff"
    }
  })