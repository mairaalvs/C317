import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Studies({navigation}) {
  const singUp = () => {
    navigation.navigate("Group")
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
      <View style={specificStyle.view}>
        <Image
          source={require('../assets/Books.png')}
        />
        <Image
          source={require('../assets/Trading.png')}
        />
      </View>
      
      <ImageBackground
        source={require('../assets/Ellipse.png')}
        style={specificStyle.group} >
        
        <View style={specificStyle.ellipse} >
          <Text
            style={specificStyle.title} >   
            Como precificar seus serviços 
          </Text>

          <Text
            style={specificStyle.subtitle} > 
            Aprenda como precificar corretamente os seus serviços e a sua hora de trabalho 
          </Text>

          <TouchableOpacity
            style={specificStyle.buttonSingIn} 
            activeOpacity={0.5}
            onPress={() => login()} >
            <Text style={specificStyle.buttonTextStyle}> 
              Ler artigo 
            </Text> 
            <View>
              <ImageBackground 
                source={require('../assets/Circles.png')} 
                style={specificStyle.buttonImageIconStyle} 
              /> 
            </View>  
          </TouchableOpacity>

        </View>
      </ImageBackground>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  
  view:{
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },

  title:{
    padding: 10,
    fontSize: 20,
    textAlign: 'left',
    color: "#2743F3",
    
  },

  subtitle:{
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    color: "#7C2AFF",
  },

  ellipse:{
    width: 375,
    height: 260,
    justifyContent: 'space-around', 
  },

  group:{
    
  },

  buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,  
    width: "80%",
    marginTop: 0, 
    borderRadius: 16, 
  },

  buttonImageIconStyle: {
    right: 2,
    padding: 22.5,
    height: 40,
    width: 60,
    resizeMode: 'contain',
  },

  buttonTextStyle: {
    color: '#fff', 
    marginLeft: 15,
    fontSize: 18,
 
  },
  
})