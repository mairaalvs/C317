import { StyleSheet, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Text } from 'react-native-elements';
import React from 'react'
import { ScreenProp } from '../types';

const Studies = ({ navigation }: ScreenProp) => {
  const singUp = () => {
    navigation.navigate("Studies2")
  }
  return (
    <ScrollView>
      <View style={styles.specificContainer}>
        <View style={styles.view}>
          <Image
            source={require('../assets/books.png')}
          />
          <Image
            source={require('../assets/Trading.png')}
          />
        </View>

        <ImageBackground
          source={require('../assets/Ellipse.png')}
          style={styles.group} >

          <View style={styles.ellipse}>
            <Text style={styles.title}>
              Seção de educação:
            </Text>

            <Text style={styles.subtitle}>
              Acesse conteúdos como matérias, podcasts, livros e informações úteis para sua vida profissional!
            </Text>

            <TouchableOpacity
              style={styles.buttonSingIn}
              activeOpacity={0.5}
              onPress={() => singUp()}
            >
              <Text style={styles.buttonTextStyle}>
                Ver conteúdo
              </Text>

              <View>
                <ImageBackground
                  source={require('../assets/Circles.png')}
                  style={styles.buttonImageIconStyle}
                />
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },

  view: {
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
  },

  group: {

  },

  ellipse: {
    width: 375,
    height: 260,
    justifyContent: 'center',
    marginTop: 170,
  },

  title: {
    padding: 10,
    fontSize: 20,
    textAlign: 'left',
    color: "#2743F3",
    marginTop: -330,
  },

  subtitle: {
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    color: "#7C2AFF",
    marginTop: 15,
  },

  buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,
    width: "80%",
    marginTop: 40,
    borderRadius: 16,
    //marginEnd: 10, 
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
});

export default Studies
