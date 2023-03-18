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
    //navigation.reset({
    //    index: 0,
    //    routes: [{name: "Principal"}]
    //})
    navigation.navigate("Welcome")
  }

  return (
    <View style={ ProfileStyle.specificContainer}>
      <ImageBackground
        source={require('../assets/Profile.png')}
        style={ProfileStyle.profile}
      >
        <Image
          source={require('../assets/ImageProfile.jpg')}
          style={ProfileStyle.imageProfile}
        />

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
            Valor do serviço
          </Text>

          <Input
            onChangeText = {value => setService(value)}
            color = "#2743FD"
          />

          <Text style={ProfileStyle.textInputView}>
            Serviços oferecidos
          </Text>

          <View style={ProfileStyle.viewService}>
            <TouchableOpacity
              style={ProfileStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileStyle.buttonServiceStyle}> 
                CSS 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ProfileStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileStyle.buttonServiceStyle}> 
                Java 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ProfileStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileStyle.buttonServiceStyle}> 
                HTML 
              </Text>
            </TouchableOpacity>
          </View>
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