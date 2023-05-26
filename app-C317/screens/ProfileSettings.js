import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, SafeAreaView, Switch} from 'react-native';
import { Button, Input, TextInput } from 'react-native-elements';
import ProfileSettingsStyle from '../styles/ProfileSettingsStyle';

export default function Profile({navigation}) {
  const [name, setName] = useState(null)
  const [profession, setProfession] = useState(null)
  const [service, setService] = useState(null)
  const [job, setJob] = useState(null)
  const [ligado, setLigado] = useState(true)
  const [switchColor, setSwitchColor] = useState("")

  const singOut = () => {
    navigation.navigate("Welcome")
  }

  const settings = () => {
    navigation.navigate("Profile2")
  }

  const toggleLigado=()=> setLigado(!ligado)

  return (
    <View style={ ProfileSettingsStyle.specificContainer}>
      <ScrollView>
        <ImageBackground
          source={require('../assets/Profile.png')}
          style={ProfileSettingsStyle.profile}
        >
          <View style={ProfileSettingsStyle.settingsImage}>
            <Image
              source={require('../assets/ImageProfile.jpg')}
              style={ProfileSettingsStyle.imageProfile}
            />
          </View>
          
          <View style={ProfileSettingsStyle.inputView}>
            <Text style={ProfileSettingsStyle.textInputView}>
              Nome
            </Text>

            <Input 
              onChangeText = {value => setName(value)}
              color = "#2743FD" 
            />

            <Text style={ProfileSettingsStyle.textInputView}>
              Profissão
            </Text>

            <Input 
              onChangeText = {value => setProfession(value)}
              color = "#2743FD" 
            />

            <Text style={ProfileSettingsStyle.textInputView}>
              Endereço
            </Text>

            <Input
              onChangeText = {value => setService(value)}
              color = "#2743FD"
            />
          </View>

          <View style={ProfileSettingsStyle.services}>
            <View style={ProfileSettingsStyle.switch}>
              <Text style={ProfileSettingsStyle.textInputView}>
                Oferecer Serviço:
              </Text>

              <Switch
                style={ProfileSettingsStyle.switchText}
                trackColor={{false:"#777", true:"#8bf"}}
                thumbColor={ligado ? "#00f" : "#444"}
                value={ligado}
                onValueChange={toggleLigado}
              >
              </Switch>
            </View>
             
            <Text style={ProfileSettingsStyle.textInputView2}>
              Serviço oferecido:
            </Text>

            <Input 
              onChangeText = {value => setName(value)}
              color = "#2743FD" 
            />

            <Text style={ProfileSettingsStyle.textInputView2}>
              Valor do Serviço:
            </Text>

            <Input 
              onChangeText = {value => setProfession(value)}
              color = "#2743FD" 
            />
          </View>

          <TouchableOpacity
            style={ProfileSettingsStyle.buttonSingIn} 
            activeOpacity={0.5}
            onPress={() => singOut()} >
            <Text style={ProfileSettingsStyle.buttonTextStyle}> 
              Sair 
            </Text> 
            <View>
              <ImageBackground 
                source={require('../assets/Arrow.png')} 
                style={ProfileSettingsStyle.buttonImageIconStyle} 
              /> 
            </View>  
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </View>
  );
}