import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Button, Input, TextInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileStyle2 from '../styles/ProfileStyle2';

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
    navigation.navigate("Chat")
  }

  return (
    <View style={ ProfileStyle2.specificContainer}>
      <ImageBackground
        source={require('../assets/Profile.png')}
        style={ProfileStyle2.profile}
      >
        <Image
        source={require('../assets/ImageProfile.jpg')}
        style={ProfileStyle2.imageProfile}
        />

        <View style={ProfileStyle2.inputView}>
          <Text style={ProfileStyle2.textInputView}>
            Nome
          </Text>

          <Input 
            onChangeText = {value => setName(value)}
            color = "#2743FD" 
          />

          <Text style={ProfileStyle2.textInputView}>
            Profissão
          </Text>

          <Input 
            onChangeText = {value => setProfession(value)}
            color = "#2743FD" 
          />

          <Text style={ProfileStyle2.textInputView}>
            Valor do serviço
          </Text>

          <Input
            onChangeText = {value => setService(value)}
            color = "#2743FD"
          />

          <Text style={ProfileStyle2.textInputView}>
            Serviços oferecidos
          </Text>

          <View style={ProfileStyle2.viewService}>
            <TouchableOpacity
              style={ProfileStyle2.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileStyle2.buttonServiceStyle}> 
                CSS 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ProfileStyle2.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileStyle2.buttonServiceStyle}> 
                Java 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ProfileStyle2.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileStyle2.buttonServiceStyle}> 
                HTML 
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={ProfileStyle2.buttonSingIn} 
          activeOpacity={0.5}
          onPress={() => singOut()} >
            <Text style={ProfileStyle2.buttonTextStyle}> 
              Vamos Conversar 
            </Text> 
            <View>
              <ImageBackground 
                source={require('../assets/Conversation.png')} 
                style={ProfileStyle2.buttonImageIconStyle} 
              /> 
            </View>  
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
} 