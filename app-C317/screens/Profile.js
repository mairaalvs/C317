import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Button, Input, TextInput } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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
    <View style={ specificStyle.specificContainer}>
      <ImageBackground
        source={require('../assets/Profile.png')}
        style={specificStyle.profile}
      >
        <Image
        source={require('../assets/ImageProfile.jpg')}
        style={specificStyle.imageProfile}
        />

        <View style={specificStyle.inputView}>
          <Text style={specificStyle.textInputView}>Nome</Text>
          <Input 
            onChangeText = {value => setName(value)}
            color = "#2743FD" 
          />

          <Text style={specificStyle.textInputView}>Profissão</Text>
          <Input 
            onChangeText = {value => setProfession(value)}
            color = "#2743FD" 
          />

          <Text style={specificStyle.textInputView}>Valor do serviço</Text>
          <Input
            onChangeText = {value => setService(value)}
            color = "#2743FD"
             
          />

          <Text style={specificStyle.textInputView}>Serviços oferecidos</Text>
          <View style={specificStyle.viewService}>
            <TouchableOpacity
              style={specificStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={specificStyle.buttonServiceStyle}> 
                CSS 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={specificStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={specificStyle.buttonServiceStyle}> 
                Java 
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={specificStyle.buttonService}
              activeOpacity={0.5}
            >
              <Text style={specificStyle.buttonServiceStyle}> 
                HTML 
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
            style={specificStyle.buttonSingIn} 
            activeOpacity={0.5}
            onPress={() => singOut()} >
            <Text style={specificStyle.buttonTextStyle}> 
              Sair 
            </Text> 
            <View>
            <ImageBackground 
              source={require('../assets/Arrow.png')} 
              style={specificStyle.buttonImageIconStyle} 
            /> 
            </View>  
        </TouchableOpacity>

      </ImageBackground>
    </View>
  );
}

const specificStyle = StyleSheet.create({
specificContainer: {
  backgroundColor: "#fff",
  flex: 1,
},

profile:{
  width: 250, 
  height: 250,
  left: 130,
},

inputView:{
  marginTop:5,
  left: -130,

},

textInputView:{
  left: 10,
  fontSize: 17,
  
},

buttonSingIn: {
  flexDirection: 'row',
  justifyContent: 'space-between', 
  alignItems: 'center', 
  backgroundColor: '#fff',
  height: 45,
  left: -70,  
  //width: "80%",
  marginTop: 10, 
  borderRadius: 16,
  borderWidth: 2,
  borderColor:  '#2743FB'
},

buttonImageIconStyle: {
  right: 10,
  height: 20,
  width: 25,
  resizeMode: 'contain',
},

buttonTextStyle: {
  color: '#2743FB', 
  marginLeft: 15,
  fontSize: 18,

},

viewService:{
  flexDirection: 'row', 
  alignItems: 'center',
  justifyContent: 'space-evenly',
  
},

buttonService:{
  flexDirection: 'row', 
  alignItems: 'center',
  backgroundColor: '#fff',
  height: 35,
  left: 10,  
  //width: "80%",
  marginTop: 7, 
  borderRadius: 16,
  borderWidth: 2,
  borderColor:  '#2743FB'
},

buttonServiceStyle:{
  color: '#2743FB', 
  marginLeft: 20,
  marginRight: 20,
  fontSize: 10,
},

imageProfile:{
  right: 120,
  marginTop: 15,
  height: 150,
  width: 150,
  resizeMode: 'contain',
  borderRadius: 75,
  //borderWidth: 1,
  shadowColor:'#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2
    
},

})  