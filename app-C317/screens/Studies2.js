import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Studies2({navigation}) {

  const [text, setText] = useState("");

  const profile = () => {
    navigation.navigate("Profile2")
  }

  return (
    <ScrollView>
        <View style = {specificStyle.view}>
            <TouchableOpacity
                style={specificStyle.button} 
                activeOpacity={0.5}>
            
            <View style={specificStyle.viewImage}>
                <Image
                source={require('../assets/stu1.jpg')}
                style={specificStyle.imageProfile}
                />
                <View style={specificStyle.viewArrow}>
                    <View style={specificStyle.viewText}>
                        <Text style={specificStyle.buttonName}> 
                            Livro: Minha vida passada a limpo 
                        </Text>
                        <Text style={specificStyle.buttonMessage}> 
                            Autora: Verônica Oliveira
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={specificStyle.button} 
                activeOpacity={0.5}>
            
            <View style={specificStyle.viewImage}>
                <Image
                source={require('../assets/stu2.png')}
                style={specificStyle.imageProfile}
                />
                <View style={specificStyle.viewArrow}>
                    <View style={specificStyle.viewText}>
                        <Text style={specificStyle.buttonName}> 
                            Matéria: 5 passos para precificar corretamente um produto 
                        </Text>
                        <Text style={specificStyle.buttonMessage}> 
                            Site: Sebrae
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={specificStyle.button} 
                activeOpacity={0.5}>
            
            <View style={specificStyle.viewImage}>
                <Image
                source={require('../assets/stu3.png')}
                style={specificStyle.imageProfile}
                />
                <View style={specificStyle.viewArrow}>
                    <View style={specificStyle.viewText}>
                        <Text style={specificStyle.buttonName}> 
                            Matéria: Uberização do trabalho - O que é e quais suas consequências? 
                        </Text>
                        <Text style={specificStyle.buttonMessage}> 
                            Site: Coonecta
                        </Text>
                    </View>
                </View>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
                style={specificStyle.button} 
                activeOpacity={0.5}>
            
            <View style={specificStyle.viewImage}>
                <Image
                source={require('../assets/stu4.png')}
                style={specificStyle.imageProfile}
                />
                <View style={specificStyle.viewArrow}>
                    <View style={specificStyle.viewText}>
                        <Text style={specificStyle.buttonName}> 
                            Matéria: INSS de autônomo - Entenda a importância da contribuição 
                        </Text>
                        <Text style={specificStyle.buttonMessage}> 
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

const specificStyle = StyleSheet.create({
view:{
    marginTop: 15,
    width: "95%",
    left: 10,
},

imageProfile:{
    marginTop: 20,
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 1,
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

viewArrow: {
    flexDirection: 'row',
    alignItems: 'center',
},

viewText: {
    left: 20,
},

buttonName: {
    fontSize: 18,
    fontWeight:'bold',
    width: 170,
},

buttonMessage: {
    marginTop: 10,
    fontSize: 18,
    color: '#2743FD'
},

});
  