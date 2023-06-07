import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { Input } from 'react-native-elements';
import React, { useState } from 'react'
import { ScreenProp } from '../types';
import { AuthService } from '../services/auth';
import Spinner from 'react-native-loading-spinner-overlay';

const Redirection = ({ navigation }: ScreenProp) => {
  const login = async () => {
    try {
      setLoading(true);
      await AuthService.forgotPassword({
        email,
        clientURI: "https://hourglassapp.azurewebsites.net/authentication/resetpassword"
      });
      Alert.alert("Check seu email para mais informações!");
      navigation.navigate("Welcome")
    }
    catch (e) {
      Alert.alert("Email inválido!");
    } finally {
      setLoading(false);
    }
  }

  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <View style={[styles.specificContainer]}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={styles.spinnerTextStyle}
      />
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={styles.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Seja bem-vindo(a)!
        </Text>


        <Text style={styles.subtitle}>
          Digite o endereço de email da sua conta. Um link será enviado para criação de uma nova senha.
        </Text>

        <View style={styles.inputView}>
          <Input
            placeholder="E-mail"
            value={email}
            onChangeText={value => setEmail(value)}
            keyboardType="email-address"
          />
        </View>

        <TouchableOpacity
          style={styles.buttonSingIn}
          activeOpacity={0.5}
          onPress={() => login()}
        >
          <Text style={styles.buttonTextStyle}>
            Enviar
          </Text>

          <View>
            <ImageBackground
              source={require('../assets/Circles-Arrow.png')}
              style={styles.buttonImageIconStyle}
            />
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff"
  },

  signIn: {
    flex: 1,
    width: 380,
    height: 340,
  },

  logo: {
    top: 40,
    left: 45,
  },

  title: {
    padding: 40,
    fontSize: 32,
    left: 3,
    textAlign: 'left',
    color: "#fff",
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.58,
    shadowRadius: 4.65,
    marginTop: 25
  },

  subtitle: {
    padding: 20,
    marginTop: 180,
    fontSize: 18,
    left: -10,
    color: "#3f3f3f",
    height: 200,
    textAlign: 'justify'
  },

  inputView: {
    color: "#3A3A3A",
    marginTop: -80,
    height: 45,
  },

  buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,
    width: "80%",
    marginTop: 60,
    borderRadius: 16,
  },

  buttonTextStyle: {
    color: '#fff',
    marginLeft: 15,
    fontSize: 18,
  },

  buttonImageIconStyle: {
    right: 2,
    padding: 22.5,
    height: 40,
    width: 60,
    resizeMode: 'contain',
  },
  spinnerTextStyle: {
    color: '#FFF',
  },
});

export default Redirection