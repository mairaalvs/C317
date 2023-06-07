import { StyleSheet, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import { Text } from 'react-native-elements';
import React from 'react'
import { ScreenProp } from '../types';

const Studies2 = ({ navigation }: ScreenProp) => {
    const profile = () => {
        // navigation.navigate("Profile2")
    }

    const link1 = () => {
        Linking.openURL('https://tecnoblog.net/responde/como-criar-um-link-para-o-whatsapp/');
    }

    const link2 = () => {
        Linking.openURL('https://www.google.com.br/books/edition/Minha_vida_passada_a_limpo/XT8HEAAAQBAJ?hl=pt-BR&gbpv=0');
    }

    const link3 = () => {
        Linking.openURL('https://www.youtube.com/watch?v=lMESxCU6cTU');
    }

    const link4 = () => {
        Linking.openURL('https://www.sebrae-sc.com.br/blog/passos-para-precificar-um-produto');
    }

    const link5 = () => {
        Linking.openURL('https://coonecta.me/uberizacao-do-trabalho-o-que-e-quais-suas-consequencias/#:~:text=O%20conceito%20de%20uberiza%C3%A7%C3%A3o%20do,sem%20que%20haja%20v%C3%ADnculo%20empregat%C3%ADcio.');
    }

    const link6 = () => {
        Linking.openURL('https://contarapido.com.br/inss-de-autonomo-entenda-a-importancia/#:~:text=Import%C3%A2ncia%20de%20contribuir%20com%20o,aos%20benef%C3%ADcios%20de%20seguridade%20social.');
    }

    const link7 = () => {
        Linking.openURL('https://www.gov.br/pt-br/servicos/realizar-registro-como-microempreendedor-individual-mei');
    }

    return (
        <ScrollView>
            <View style={styles.view}>
                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => link1()}
                >
                    <View style={styles.viewImage}>
                        <Image
                            source={require('../assets/WhatsApp_tecnoblog.jpeg')}
                            style={styles.imageProfile}
                        />
                        <View style={styles.viewArrow}>
                            <View style={styles.viewText}>
                                <Text style={styles.buttonName}>
                                    Matéria: Como criar um link para o WhatsApp
                                </Text>

                                <Text style={styles.buttonMessage}>
                                    Site: Tecnoblog
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => link2()}
                >
                    <View style={styles.viewImage}>
                        <Image
                            source={require('../assets/stu1.jpg')}
                            style={styles.imageProfile}
                        />
                        <View style={styles.viewArrow}>
                            <View style={styles.viewText}>
                                <Text style={styles.buttonName}>
                                    Livro: Minha vida passada a limpo
                                </Text>

                                <Text style={styles.buttonMessage}>
                                    Autora: Verônica Oliveira
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => link3()}
                >
                    <View style={styles.viewImage}>
                        <Image
                            source={require('../assets/podpah.jpg')}
                            style={styles.imageProfile}
                        />
                        <View style={styles.viewArrow}>
                            <View style={styles.viewText}>
                                <Text style={styles.buttonName}>
                                    Podcast: VERONICA OLIVEIRA (FAXINA BOA) - Podpah
                                </Text>

                                <Text style={styles.buttonMessage}>
                                    Site: Youtube
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => link4()}
                >
                    <View style={styles.viewImage}>
                        <Image
                            source={require('../assets/stu2.png')}
                            style={styles.imageProfile}
                        />
                        <View style={styles.viewArrow}>
                            <View style={styles.viewText}>
                                <Text style={styles.buttonName}>
                                    Matéria: 5 passos para precificar corretamente um produto
                                </Text>

                                <Text style={styles.buttonMessage}>
                                    Site: Sebrae
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => link5()}
                >
                    <View style={styles.viewImage}>
                        <Image
                            source={require('../assets/stu3.png')}
                            style={styles.imageProfile}
                        />
                        <View style={styles.viewArrow}>
                            <View style={styles.viewText}>
                                <Text style={styles.buttonName}>
                                    Matéria: Uberização do trabalho - O que é e quais suas consequências?
                                </Text>

                                <Text style={styles.buttonMessage}>
                                    Site: Coonecta
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => link6()}
                >
                    <View style={styles.viewImage}>
                        <Image
                            source={require('../assets/stu4.png')}
                            style={styles.imageProfile}
                        />
                        <View style={styles.viewArrow}>
                            <View style={styles.viewText}>
                                <Text style={styles.buttonName}>
                                    Matéria: INSS de autônomo - Entenda a importância da contribuição
                                </Text>

                                <Text style={styles.buttonMessage}>
                                    Site: ContaRapido
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    activeOpacity={0.5}
                    onPress={() => link7()}
                >
                    <View style={styles.viewImage}>
                        <Image
                            source={require('../assets/gov.png')}
                            style={styles.imageProfile}
                        />
                        <View style={styles.viewArrow}>
                            <View style={styles.viewText}>
                                <Text style={styles.buttonName}>
                                    Matéria: Cadastrar Microempreendedor Individual (MEI)
                                </Text>

                                <Text style={styles.buttonMessage}>
                                    Site: Gov.br
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    view: {
        marginTop: 15,
        width: "95%",
        left: 10,
    },

    button: {
        marginVertical: 5,
        borderBottomWidth: StyleSheet.hairlineWidth,
        paddingBottom: 10,
    },

    viewImage: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 3,
    },

    imageProfile: {
        marginTop: 20,
        height: 100,
        width: 100,
        resizeMode: 'contain',
        borderRadius: 50,
        borderWidth: 1,
    },

    viewArrow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    viewText: {
        left: 20,
    },

    buttonName: {
        fontSize: 18,
        fontWeight: 'bold',
        width: 170,
        textAlign: 'auto'
    },

    buttonMessage: {
        marginTop: 10,
        fontSize: 18,
        color: '#2743FD'
    },
});

export default Studies2