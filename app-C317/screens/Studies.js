import React, { useState } from 'react';
import { StyleSheet, View, Image, ImageBackground } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../style/MainStyle';

export default function Studies() {
  const singUp = () => {
    navigation.navigate()
  }

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
    <Image
      source={require('../assets/Books.png')}
      style={specificStyle.books}
    />
    <Image
      source={require('../assets/Trading.png')}
      style={specificStyle.trading}
    />
    <ImageBackground
      source={require('../assets/Ellipse.png')}
      style={specificStyle.ellipse}
    >
    <Text
      style={specificStyle.title}
    > Como precificar seus serviços </Text>
    <Text
      style={specificStyle.title}
    > Aprenda como precificar corretamente os seus serviços e a sua hora de trabalho </Text>
    <Button
      title="Ler artigo"
      buttonStyle = {specificStyle.buttonArticle}
      onPress={() => singUp()}
    />
    </ImageBackground>
    </View>
  );
}

const specificStyle = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
  
  books:{
    
  },

  trading:{
    
  },

  buttonArticle: {
    left: 40,
    width: "80%",
    marginTop: 10,
    borderRadius: 50
  },

  title:{
    padding: 15,
    fontSize: 28,
    textAlign: 'left',
    color: "#2743F3",
    
  },

  subtitle:{
    padding: 15,
    fontSize: 18,
    textAlign: 'left',
    color: "#7C2AFF",
  },

  ellipse:{
    width: 'auto',
    height: 'auto',
  }
  
})