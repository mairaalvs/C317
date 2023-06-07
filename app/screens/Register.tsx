import { View, Text, StyleSheet, ImageBackground, Image, Alert, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { validCpf, validEmail, validPassword } from '../utils/regex'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { Input } from 'react-native-elements';
import { ScreenProp } from '../types';
import { useAuth } from '../context/AuthContext';
import { SPINNER_TEXT_STYLE } from '../utils/Constants';
import Spinner from 'react-native-loading-spinner-overlay';

const Register = ({ navigation }: ScreenProp) => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hidePassword, setHidePassword] = useState<boolean>(true);
    const [cpf, setCpf] = useState('')

    const [inputEmailErr, setInputEmailErr] = useState(false);
    const [inputPassordErr, setInputPasswordErr] = useState(false);
    const [inputCpfErr, setInputCpfErr] = useState(false);

    const [loading, setLoading] = useState(false);
    const { onRegister } = useAuth()

    const validate = async () => {
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
        if (!validCpf.test(cpf)) {
            setInputCpfErr(true);
            return;
        } else {
            setInputCpfErr(false);
        }

        try {
            setLoading(true)
            await onRegister!({ email, password, confirmPassword: password, name, cpf: cpf.replace(/\D/g, "") })
            navigation.navigate("Confirmation")
        } catch (error) {
            //alert(error);
            Alert.alert('Check as informações e tente novamente!');
        }
        finally { setLoading(false) }

    };

    return (

        <View style={styles.specificContainer}>
            <Spinner
                visible={loading}
                textContent={'Loading...'}
                textStyle={SPINNER_TEXT_STYLE}
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
                    Cadastre-se:
                </Text>

                <View style={styles.areaName}>
                    <Input
                        style={styles.name}
                        placeholder="Nome completo"
                        value={name}
                        onChangeText={value => setName(value)}
                    />
                </View>

                <View style={styles.areaEmail}>
                    <Input style={styles.inputEmail}
                        placeholder="E-mail"
                        value={email}
                        onChangeText={value => setEmail(value)}
                        keyboardType="email-address"
                    />
                </View>
                {inputEmailErr && <Text style={styles.messageErrorEmail}>Por favor digete um email valido!</Text>}

                <View style={styles.areaPassword}>
                    <Input
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
                {inputPassordErr && <Text style={styles.messageErrorPassword}>Por favor digite uma senha mais segura!</Text>}

                <View style={styles.areaCpf}>
                    <Input
                        style={styles.cpf}
                        placeholder="CPF"
                        value={cpf}
                        onChangeText={value => setCpf(value)}
                        secureTextEntry={false}
                        returnKeyType="done"
                    />
                </View>
                {inputCpfErr && <Text style={styles.messageErrorCpf}>Por favor digete um cpf valido!</Text>}

                <TouchableOpacity
                    style={styles.buttonSingIn}
                    activeOpacity={0.5}
                    onPress={() => validate()}

                >
                    <Text style={styles.buttonTextStyle}>
                        Cadastrar
                    </Text>

                    <View>
                        <ImageBackground
                            source={require('../assets/Circles-Arrow.png')}
                            style={styles.buttonImageIconStyle}
                        />
                    </View>
                </TouchableOpacity>
                {loading &&
                    <View style={[styles.loading]}>
                        <ActivityIndicator size="large" color="#2B47FC" />
                    </View>
                }
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff"
    },

    signIn: {
        flex: 1,
        width: 380,
        height: 340,
        top: -30
    },

    logo: {
        top: 70,
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
        marginTop: 40
    },

    subtitle: {
        padding: 30,
        top: 30,
        fontSize: 30,
        left: -5,
        fontWeight: 'bold',
    },

    inputView: {
        marginTop: 100,
    },

    areaName: {
        flexDirection: 'row',
        width: '98%',
        height: 45,
        alignItems: 'center',
        marginTop: 100,
        //borderRadius: 16,
        //borderWidth: 2,
        //borderColor: '#2743FB'

    },

    areaEmail: {
        flexDirection: 'row',
        width: '98%',
        height: 45,
        alignItems: 'center',
        marginTop: 10,
        //borderRadius: 16,
        //borderWidth: 2,
        //borderColor: '#2743FB'

    },

    areaPassword: {
        flexDirection: 'row',
        width: '90%',
        height: 45,
        alignItems: 'center',
        marginTop: 10,
        //borderRadius: 16,
        //borderWidth: 2,
        //borderColor: '#2743FB'

    },

    areaCpf: {
        flexDirection: 'row',
        width: '90%',
        height: 40,
        alignItems: 'center',
        marginTop: 20,
        //borderRadius: 16,
        //borderWidth: 2,
        //borderColor: '#2743FB'

    },

    name: {
        marginTop: 0,
    },

    inputEmail: {
        marginTop: 0
    },

    messageErrorEmail: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 10,
        marginTop: -3,
        height: 16,
    },

    inputPassword: {
        flexDirection: 'row',
        width: '100%',
        height: 40,
        alignItems: 'center',
        //left: 12,
        fontSize: 19,
        //borderBottomWidth: 0.8,
        borderBottomColor: "#808080",
        marginTop: 0,
    },

    messageErrorPassword: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 10,
        marginTop: 9,
        height: 18,
    },

    cpf: {
        marginTop: 0,
    },

    messageErrorCpf: {
        color: '#FF0000',
        fontSize: 14,
        marginLeft: 10,
        marginTop: 17,
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
        marginTop: 25,
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

    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Register;