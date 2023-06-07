import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'
import { ScreenProp } from '../types';


const Welcome = ({ navigation }: ScreenProp) => {

    const login = () => {
        //navigation.reset({
        //  index: 0,
        //  routes: [{name: "Login"}]
        //})
        navigation.navigate("Login");
    }

    const singUp = () => {
        //navigation.reset({
        //  index: 0,
        //  routes: [{name: "Cadastro"}]
        //})
        navigation.navigate("Register");
    }

    return (
        <View style={[styles.specificContainer]}>
            <ImageBackground
                source={require('../assets/Welcome.png')}
                style={styles.welcome}
            >
                <Image
                    source={require('../assets/Hourglass.png')}
                    style={styles.logo}
                />

                <Text style={styles.title}>
                    Seja bem-vindo(a) ao Hourglass
                </Text>

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

                <TouchableOpacity
                    style={styles.buttonSingIn2}
                    activeOpacity={0.5}
                    onPress={() => singUp()}
                >
                    <Text style={styles.buttonTextStyle2}>
                        Cadastre-se
                    </Text>

                    <View>
                        <ImageBackground
                            source={require('../assets/Arrow.png')}
                            style={styles.buttonImageIconStyle2}
                        />
                    </View>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff",
        flex: 1,
    },

    welcome: {
        width: "100%",
        height: "100%",
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

    buttonSingIn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#4960F9',
        height: 45,
        left: 40,
        width: "80%",
        marginTop: 280,
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

    buttonSingIn2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 45,
        left: 40,
        width: "80%",
        marginTop: 10,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#2743FB'
    },

    buttonTextStyle2: {
        color: '#2743FB',
        marginLeft: 15,
        fontSize: 18,

    },

    buttonImageIconStyle2: {
        right: 10,
        height: 20,
        width: 25,
        resizeMode: 'contain',
    },
})

export default Welcome;