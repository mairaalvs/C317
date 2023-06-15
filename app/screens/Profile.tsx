import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Alert, ScrollView } from 'react-native';
import { Input } from 'react-native-elements';
import { useAuth } from '../context/AuthContext';
import { ScreenProp } from '../types';
import { UserService } from '../services/UserService';
import { UserModel } from '../api/user';
import { SPINNER_TEXT_STYLE } from '../utils/Constants';
import Spinner from 'react-native-loading-spinner-overlay/lib';

const Profile = ({ navigation }: ScreenProp) => {

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<UserModel>()
    const [avatar, setAvatar] = useState<string | null>(null); // initialize it to an empty string

    const { onLogout } = useAuth();

    const singOut = () => {
        onLogout!();
        Alert.alert('Logout', 'Você foi deslogado com sucesso!');
    }

    const settings = () => {
        navigation.navigate("ProfileSettings", { user })
    }
    const loadImage = async (user: UserModel) => {
        try {
            if (user?.pictureUploadId == null) {
                return;
            }
            const picture = await UserService.getProfilePicture(user!.pictureUploadId);
            setAvatar(picture);
        } catch (error) {
            console.error(error)
        }
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            setLoading(true);
            try {
                const response = await UserService.me();
                setUser(response.data);
                await loadImage(response.data);
            } catch (error) {
                alert(error);
            } finally {
                setLoading(false);
            }
        });

        // Return the function to unsubscribe from the event so it gets removed on unmount
        return unsubscribe;
    }, [navigation])

    return (

        <View style={styles.specificContainer}>
            <ScrollView>
                <Spinner
                    visible={loading}
                    textContent={'Loading...'}
                    textStyle={SPINNER_TEXT_STYLE}
                />
                <ImageBackground
                    source={require('../assets/Profile.png')}
                    style={styles.profile}
                >
                    <View style={styles.settingsImage}>
                        {avatar ? <Image
                            source={{ uri: avatar }}
                            style={styles.imageProfile}
                        /> : <Image
                            source={require('../assets/Missing_avatar.svg.png')}
                            style={styles.imageProfile}
                        />}

                        <TouchableOpacity
                            activeOpacity={0.5}
                            onPress={() => settings()}>
                            <View>
                                <ImageBackground
                                    source={require('../assets/gear.png')}
                                    style={styles.settings}
                                />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.inputView}>
                        <Text style={styles.textInputView}>
                            Nome:
                        </Text>

                        <Input
                            // onChangeText={value => setName(value)}
                            cursorColor={'#2743FD'}
                            value={user?.name}
                            editable={false}
                        />

                        <Text style={styles.textInputView}>
                            CPF:
                        </Text>

                        <Input
                            // onChangeText={value => setProfession(value)}
                            cursorColor={'#2743FD'}
                            value={user?.cpf}
                            editable={false}
                        />

                        <Text style={styles.textInputView}>
                            Endereço:
                        </Text>

                        <Input
                            // onChangeText={value => setService(value)}
                            cursorColor={'#2743FD'}
                            value={user?.street ? user.street : "Endereço não cadastrado"}
                            editable={false}
                        />

                        <Text style={styles.textInputView}>
                            Serviço oferecido:*
                        </Text>

                        <Input
                            // onChangeText={value => setName(value)}
                            cursorColor={'#2743FD'}
                            value={user?.services[0]?.name}
                            editable={false}
                        />

                        <Text style={styles.textInputView}>
                            Valor do Serviço:*
                        </Text>

                        <Input
                            // onChangeText={value => setProfession(value)}
                            cursorColor={'#2743FD'}
                            value={user?.services[0]?.price.toString()}
                            editable={false}
                        />

                        <Text style={styles.textInputView}>
                            Link de contato no WhatsApp:*
                        </Text>

                        <Input
                            // onChangeText={value => setProfession(value)}
                            cursorColor={'#2743FD'}
                            editable={false}
                            value={user?.services[0]?.contactLink}
                        />

                    </View>

                    <TouchableOpacity
                        style={styles.buttonSingOut}
                        activeOpacity={0.5}
                        onPress={() => singOut()} >
                        <Text style={styles.buttonTextStyle}>
                            Sair
                        </Text>
                        <View>
                            <ImageBackground
                                source={require('../assets/Arrow.png')}
                                style={styles.buttonImageIconStyle}
                            />
                        </View>
                    </TouchableOpacity>
                </ImageBackground>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    specificContainer: {
        backgroundColor: "#fff",
        flex: 1,
    },

    profile: {
        width: 250,
        height: 250,
        left: 130,
    },

    settingsImage: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },

    imageProfile: {
        right: 145,
        marginTop: 5,
        height: 120,
        width: 120,
        resizeMode: 'contain',
        borderRadius: 75,
        //borderWidth: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.8,
        shadowRadius: 2
    },

    settings: {
        marginTop: 25,
        right: 165,
        height: 35,
        width: 35,
        resizeMode: 'contain',
    },

    inputView: {
        marginTop: 17,
        left: -130,
        width: "150%"
    },

    textInputView: {
        left: 10,
        fontSize: 17,
        marginTop: -24,
        fontWeight: 'bold',
        width: "128%"
    },

    buttonSingOut: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 45,
        left: -70,
        //width: "80%",
        marginTop: -10,
        borderRadius: 16,
        borderWidth: 2,
        borderColor: '#2743FB'
    },

    buttonTextStyle: {
        color: '#2743FB',
        marginLeft: 15,
        fontSize: 18,

    },

    buttonImageIconStyle: {
        right: 10,
        height: 20,
        width: 25,
        resizeMode: 'contain',
    },
});

export default Profile