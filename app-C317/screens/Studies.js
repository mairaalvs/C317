import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import StudiesStyle from '../styles/StudiesStyle';


export default function Studies({navigation}) {
  const singUp = () => {
    navigation.navigate("Studies2")
  }

  return (
    <ScrollView>
      <View style={StudiesStyle.specificContainer}>
        <View style={StudiesStyle.view}>
          <Image
            source={require('../assets/books.png')}
          />
          <Image
            source={require('../assets/Trading.png')}
          />
        </View>
        
        <ImageBackground
          source={require('../assets/Ellipse.png')}
          style={StudiesStyle.group} >
          
          <View style={StudiesStyle.ellipse}>
            <Text style={StudiesStyle.title}>   
              Como precificar seus serviços 
            </Text>

            <Text style={StudiesStyle.subtitle}> 
              Aprenda como precificar corretamente os seus serviços e a sua hora de trabalho 
            </Text>

            <TouchableOpacity
              style={StudiesStyle.buttonSingIn} 
              activeOpacity={0.5}
              onPress={() => singUp()}
            >
              <Text style={StudiesStyle.buttonTextStyle}> 
                Ver conteúdo 
              </Text>

              <View>
                <ImageBackground 
                  source={require('../assets/Circles.png')} 
                  style={StudiesStyle.buttonImageIconStyle} 
                /> 
              </View>  
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
      </ScrollView>
  );
}