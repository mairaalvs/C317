import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudiesStyle2 from '../styles/StudiesStyle2';

export default function Studies2({navigation}) {
    const [text, setText] = useState("");

    const profile = () => {
        navigation.navigate("Profile2")
    }

    return (
        <ScrollView>
            <View style = {StudiesStyle2.view}>
                <TouchableOpacity
                    style={StudiesStyle2.button} 
                    activeOpacity={0.5}
                >
                    <View style={StudiesStyle2.viewImage}>
                        <Image
                            source={require('../assets/stu1.jpg')}
                            style={StudiesStyle2.imageProfile}
                        />
                        <View style={StudiesStyle2.viewArrow}>
                            <View style={StudiesStyle2.viewText}>
                                <Text style={StudiesStyle2.buttonName}> 
                                    Livro: Minha vida passada a limpo 
                                </Text>

                                <Text style={StudiesStyle2.buttonMessage}> 
                                    Autora: Verônica Oliveira
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={StudiesStyle2.button} 
                    activeOpacity={0.5}
                >
                    <View style={StudiesStyle2.viewImage}>
                        <Image
                            source={require('../assets/stu2.png')}
                            style={StudiesStyle2.imageProfile}
                        />
                        <View style={StudiesStyle2.viewArrow}>
                            <View style={StudiesStyle2.viewText}>
                                <Text style={StudiesStyle2.buttonName}> 
                                    Matéria: 5 passos para precificar corretamente um produto 
                                </Text>

                                <Text style={StudiesStyle2.buttonMessage}> 
                                    Site: Sebrae
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={StudiesStyle2.button} 
                    activeOpacity={0.5}
                >
                    <View style={StudiesStyle2.viewImage}>
                        <Image
                            source={require('../assets/stu3.png')}
                            style={StudiesStyle2.imageProfile}
                        />
                        <View style={StudiesStyle2.viewArrow}>
                            <View style={StudiesStyle2.viewText}>
                                <Text style={StudiesStyle2.buttonName}> 
                                    Matéria: Uberização do trabalho - O que é e quais suas consequências? 
                                </Text>

                                <Text style={StudiesStyle2.buttonMessage}> 
                                    Site: Coonecta
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style={StudiesStyle2.button} 
                    activeOpacity={0.5}
                >
                    <View style={StudiesStyle2.viewImage}>
                        <Image
                            source={require('../assets/stu4.png')}
                            style={StudiesStyle2.imageProfile}
                        />
                        <View style={StudiesStyle2.viewArrow}>
                            <View style={StudiesStyle2.viewText}>
                                <Text style={StudiesStyle2.buttonName}> 
                                    Matéria: INSS de autônomo - Entenda a importância da contribuição 
                                </Text>

                                <Text style={StudiesStyle2.buttonMessage}> 
                                    Site: ContaRapido
                                </Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}