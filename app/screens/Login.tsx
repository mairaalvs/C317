import { ImageBackground, View, Image, TouchableOpacity, TextInput, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { Input, Text } from 'react-native-elements';
import React, { useEffect, useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Spinner from 'react-native-loading-spinner-overlay';

import { useAuth } from '../context/AuthContext'
import { validEmail, validPassword } from '../utils/regex';
import { ScreenProp } from '../types';
import { SPINNER_TEXT_STYLE } from '../utils/Constants';


const Login = ({ navigation }: ScreenProp) => {

    const [loading, setLoading] = useState(false);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [hidePassword, setHidePassword] = useState<boolean>(true);

    const [inputEmailErr, setInputEmailErr] = useState(false);
    const [inputPassordErr, setInputPasswordErr] = useState(false);

    const { onLogin } = useAuth();

    const ensureLoginCredentials = () => {
        if (!validEmail.test(email)) {
            setInputEmailErr(true);
            return;
        } else {
            setInputEmailErr(false);
        }

        if (!validPassword.test(password)) {
            setInputPasswordErr(true);
            return;
        } else {
            setInputPasswordErr(false);
        }
    }

    const login = async () => {
        ensureLoginCredentials();
        try {
            setLoading(true);
            await onLogin!({ email, password });
        } catch (e) {
            Alert.alert("Credenciais inválidas!");
        } finally {
            setLoading(false);
        }
    }

    const recoverPassword = async () => {
        navigation.navigate('Redirection');

    }

    return (
        <View style={[styles.specificContainer]}>
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
                    Entrar:
                </Text>

                <View style={styles.inputView}>
                    <View style={styles.area}>
                        <Input
                            style={styles.inputEmail}
                            placeholder="E-mail"
                            value={email}
                            onChangeText={value => setEmail(value)}
                            keyboardType="email-address"
                        />
                    </View>
                    {inputEmailErr && <Text style={styles.messageErrorEmail}>Verifique se o email digitado esta correta!</Text>}

                    <View style={styles.area}>
                        <TextInput
                            style={styles.inputPassword}
                            placeholder="Senha"
                            secureTextEntry={hidePassword}
                            value={password}
                            onChangeText={value => setPassword(value)}
                        />

                        <TouchableOpacity onPress={() => setHidePassword(!hidePassword)}>
                            {hidePassword ?
                                <FontAwesome5 name="eye-slash" size={24} color="black" />
                                :
                                <FontAwesome5 name="eye" size={24} color="black" />
                            }
                        </TouchableOpacity>
                    </View>
                    {inputPassordErr && <Text style={styles.messageErrorPassword}>Verifique se a senha digitada esta correto!</Text>}
                </View>

                <TouchableOpacity
                    style={styles.buttonSingIn2}
                    activeOpacity={0.5}
                    onPress={() => recoverPassword()} >
                    <Text style={styles.buttonTextStyle2}>
                        Esqueceu sua senha?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.buttonSingIn}
                    activeOpacity={0.5}
                    onPress={() => login()}
                >
                    <Text style={styles.buttonTextStyle}>
                        Entrar
                    </Text>

                    <View>
                        <ImageBackground
                            source={require('../assets/Circles-Arrow.png')}
                            style={styles.buttonImageIconStyle}
                        />
                    </View>
                </TouchableOpacity>
            </ImageBackground>
            {loading ?
                <ActivityIndicator size="large" style={{
                    backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1, height: '100%'
                }} />
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        gap: 10,
        width: '60%',
    },
    input: {
        height: 44,
        borderWidth: 1,
        borderRadius: 4,
        padding: 10,
        backgroundColor: '#fff',
    },
    specificContainer: {
        backgroundColor: "#fff",
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
        // shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 7,
        },
        shadowOpacity: 0.58,
        shadowRadius: 4.65,
        marginTop: 25
    },

    subtitle: {
        padding: 40,
        top: 130,
        fontSize: 30,
        left: -20,
        color: "#000",
        fontWeight: 'bold',
    },

    inputView: {
        color: "#3A3A3A",
        marginTop: 110,
    },

    area: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        marginTop: 30,
    },

    inputEmail: {
        marginTop: 0,
    },

    messageErrorEmail: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 10,
        marginTop: -8,
        height: 18,
    },

    inputPassword: {
        flexDirection: 'row',
        width: '90%',
        height: 40,
        alignItems: 'center',
        left: 12,
        fontSize: 19,
        borderBottomWidth: 0.8,
        borderBottomColor: "#808080",
    },

    messageErrorPassword: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 10,
        marginTop: 3,
        height: 18,
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

    buttonSingIn2: {
        flexDirection: 'row',
        height: 20,
        left: 10,
        width: "80%",
        marginTop: 150,
        //borderRadius: 0,
        //borderWidth: 0,
    },

    buttonTextStyle2: {
        color: '#2743FB',
        //marginLeft: 0,
        fontSize: 15,
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

    container: {
        flex: 1,
        justifyContent: 'center',
    },

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
});

export default Login;