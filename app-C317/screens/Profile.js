import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Button, Input, TextInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileStyle from '../styles/ProfileStyle';

export default function Profile({navigation}) {
  const [name, setName] = useState(null)
  const [profession, setProfession] = useState(null)
  const [service, setService] = useState(null)
  const [job, setJob] = useState(null)

  const singOut = () => {
    navigation.navigate("Welcome")
  }

  const settings = () => {
    navigation.navigate("ProfileSettings")
  }

  return (
    <View style={ ProfileStyle.specificContainer}>
      <ImageBackground
        source={require('../assets/Profile.png')}
        style={ProfileStyle.profile}
      >
        <View style={ProfileStyle.settingsImage}>
          <Image
            source={require('../assets/ImageProfile.jpg')}
            style={ProfileStyle.imageProfile}
          />

          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => settings()}>
            <View>
              <ImageBackground 
                source={require('../assets/gear.png')} 
                style={ProfileStyle.settings} 
              /> 
            </View>  
          </TouchableOpacity>
        </View>
        
        <View style={ProfileStyle.inputView}>
          <Text style={ProfileStyle.textInputView}>
            Nome
          </Text>

          <Input 
            onChangeText = {value => setName(value)}
            color = "#2743FD" 
          />

          <Text style={ProfileStyle.textInputView}>
            Profissão
          </Text>

          <Input 
            onChangeText = {value => setProfession(value)}
            color = "#2743FD" 
          />

          <Text style={ProfileStyle.textInputView}>
            Endereço
          </Text>

          <Input
            onChangeText = {value => setService(value)}
            color = "#2743FD"
          />

        </View>

        <TouchableOpacity
          style={ProfileStyle.buttonSingIn} 
          activeOpacity={0.5}
          onPress={() => singOut()} >
          <Text style={ProfileStyle.buttonTextStyle}> 
            Sair 
          </Text> 
          <View>
            <ImageBackground 
              source={require('../assets/Arrow.png')} 
              style={ProfileStyle.buttonImageIconStyle} 
            /> 
          </View>  
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}