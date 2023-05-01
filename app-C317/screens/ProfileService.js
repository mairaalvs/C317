import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Button, Input, TextInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import ProfileServiceStyle from '../styles/ProfileServiceStyle';

export default function Profile({navigation}) {
  const [name, setName] = useState(null)
  const [profession, setProfession] = useState(null)
  const [service, setService] = useState(null)
  const [job, setJob] = useState(null)

  const singOut = () => {
    navigation.navigate("Chat")
  }

  return (
    <View style={ ProfileServiceStyle.specificContainer}>
      <ImageBackground
        source={require('../assets/Profile.png')}
        style={ProfileServiceStyle.profile}
      >
        <Image
        source={require('../assets/ImageProfile.jpg')}
        style={ProfileServiceStyle.imageProfile}
        />

        <View style={ProfileServiceStyle.inputView}>
          <Text style={ProfileServiceStyle.textInputView}>
            Nome
          </Text>

          <Input 
            onChangeText = {value => setName(value)}
            color = "#2743FD" 
          />

          <Text style={ProfileServiceStyle.textInputView}>
            Profissão
          </Text>

          <Input 
            onChangeText = {value => setProfession(value)}
            color = "#2743FD" 
          />

          <Text style={ProfileServiceStyle.textInputView}>
            Endereço {/*Acho que o endereço não deveria aparecer pra pessoa que esta analisando o perfil do profissional*/}
          </Text> 

          <Input
            onChangeText = {value => setService(value)}
            color = "#2743FD"
          />

          <Text style={ProfileServiceStyle.textInputView}>
            Serviços oferecidos
          </Text>

          <View style={ProfileServiceStyle.viewService}>
            <TouchableOpacity
              style={ProfileServiceStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileServiceStyle.buttonServiceStyle}> 
                CSS 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ProfileServiceStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileServiceStyle.buttonServiceStyle}> 
                Java 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={ProfileServiceStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={ProfileServiceStyle.buttonServiceStyle}> 
                HTML 
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={ProfileServiceStyle.buttonSingIn} 
          activeOpacity={0.5}
          onPress={() => singOut()} >
            <Text style={ProfileServiceStyle.buttonTextStyle}> 
              Vamos Conversar 
            </Text> 
            <View>
              <ImageBackground 
                source={require('../assets/Conversation.png')} 
                style={ProfileServiceStyle.buttonImageIconStyle} 
              /> 
            </View>  
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
} 