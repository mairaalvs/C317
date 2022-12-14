import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Notification({navigation}) {

  const [text, setText] = useState("");

  const chat = () => {
    navigation.navigate("Chat")
  }

  return (
    <ScrollView>
    <SafeAreaView style = {specificStyle.view}>
      <View style = {specificStyle.header}>
      <TextInput 
          style = {specificStyle.input} 
          placeholder='Buscar' 
          value={text} 
          onChangeText={(value) => 
          setText(value)}
        >
        <Icon
          name="search"
          size={30}
          color='#3D56FA'
          onPress={() => {}}
        />
        </TextInput>
      </View>
      <Text style={specificStyle.textSubTitle} >Notificações</Text>

      <TouchableOpacity
        style={specificStyle.button} 
        activeOpacity={0.5}
        onPress={() => chat()} >
        
        <View style={specificStyle.viewImage}>
          <Image
            style={specificStyle.avatar}
            resizeMode='contain'
            source={{uri: 'https://placeimg.com/140/140/any'}}
          />

          <View style={specificStyle.viewArrow}>
            
            <View style={specificStyle.viewText}>
              <Text style={specificStyle.buttonName}> 
                Ana Luiza 
              </Text>
              <Text style={specificStyle.buttonMessage}> 
                Olá! 
              </Text>
            </View>

            <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
          </View>
 
        </View>
         
      </TouchableOpacity>

      <TouchableOpacity
        style={specificStyle.button} 
        activeOpacity={0.5}
        onPress={() => chat()} >
        
        <View style={specificStyle.viewImage}>
          <Image
            style={specificStyle.avatar}
            resizeMode='contain'
            source={{uri: 'https://placeimg.com/140/140/any'}}
          />

          <View style={specificStyle.viewArrow}>
            
            <View style={specificStyle.viewText}>
              <Text style={specificStyle.buttonName}> 
                João Paulo 
              </Text>
              <Text style={specificStyle.buttonMessage}> 
                Olá! 
              </Text>
            </View>

            <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
          </View>
 
        </View>
         
      </TouchableOpacity>

      <TouchableOpacity
        style={specificStyle.button} 
        activeOpacity={0.5}
        onPress={() => chat()} >
        
        <View style={specificStyle.viewImage}>
          <Image
            style={specificStyle.avatar}
            resizeMode='contain'
            source={{uri: 'https://placeimg.com/140/140/any'}}
          />

          <View style={specificStyle.viewArrow}>
            
            <View style={specificStyle.viewText}>
              <Text style={specificStyle.buttonName}> 
                André 
              </Text>
              <Text style={specificStyle.buttonMessage}> 
                Olá! 
              </Text>
            </View>

            <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
          </View>
 
        </View>
         
      </TouchableOpacity>

      <TouchableOpacity
        style={specificStyle.button} 
        activeOpacity={0.5}
        onPress={() => chat()} >
        
        <View style={specificStyle.viewImage}>
          <Image
            style={specificStyle.avatar}
            resizeMode='contain'
            source={{uri: 'https://placeimg.com/140/140/any'}}
          />

          <View style={specificStyle.viewArrow}>
            
            <View style={specificStyle.viewText}>
              <Text style={specificStyle.buttonName}> 
                Pedro 
              </Text>
              <Text style={specificStyle.buttonMessage}> 
                Olá! 
              </Text>
            </View>

            <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
          </View>
 
        </View>
         
      </TouchableOpacity>

      <TouchableOpacity
        style={specificStyle.button} 
        activeOpacity={0.5}
        onPress={() => chat()} >
        
        <View style={specificStyle.viewImage}>
          <Image
            style={specificStyle.avatar}
            resizeMode='contain'
            source={{uri: 'https://placeimg.com/140/140/any'}}
          />

          <View style={specificStyle.viewArrow}>
            
            <View style={specificStyle.viewText}>
              <Text style={specificStyle.buttonName}> 
                Luciana 
              </Text>
              <Text style={specificStyle.buttonMessage}> 
                Olá! 
              </Text>
            </View>

            <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
          </View>
 
        </View>
         
      </TouchableOpacity>

      <TouchableOpacity
        style={specificStyle.button} 
        activeOpacity={0.5}
        onPress={() => chat()} >
        
        <View style={specificStyle.viewImage}>
          <Image
            style={specificStyle.avatar}
            resizeMode='contain'
            source={{uri: 'https://placeimg.com/140/140/any'}}
          />

          <View style={specificStyle.viewArrow}>
            
            <View style={specificStyle.viewText}>
              <Text style={specificStyle.buttonName}> 
                Júlia 
              </Text>
              <Text style={specificStyle.buttonMessage}> 
                Olá! 
              </Text>
            </View>

            <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
          </View>
 
        </View>
         
      </TouchableOpacity>

      <TouchableOpacity
        style={specificStyle.button} 
        activeOpacity={0.5}
        onPress={() => chat()} >
        
        <View style={specificStyle.viewImage}>
          <Image
            style={specificStyle.avatar}
            resizeMode='contain'
            source={{uri: 'https://placeimg.com/140/140/any'}}
          />

          <View style={specificStyle.viewArrow}>
            
            <View style={specificStyle.viewText}>
              <Text style={specificStyle.buttonName}> 
                Fernando 
              </Text>
              <Text style={specificStyle.buttonMessage}> 
                Olá! 
              </Text>
            </View>

            <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
          </View>
 
        </View>
         
      </TouchableOpacity> 
      
    </SafeAreaView>
    </ScrollView>
    );
}

const specificStyle = StyleSheet.create({
  view:{
    marginTop: 15,
    width: "95%",
    left: 10,
  },

  header:{
    flexDirection: "row",
    justifyContent: "space-between"
  },

  input:{
    flex: 1,
    backgroundColor: "white",
    color:'#2743FD',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
  },

  textSubTitle: {
    padding: 20,
    fontSize: 24,
    right: 20,
    fontWeight:'bold',
  },

  button: {
    marginVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  viewImage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
  },

  viewArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewText: {
    left: 20,
  },

  viewArrowRight: {
    left: 110,
    alignItems: 'center',
    size:15,
    color:"#2B47FC",
  },

  buttonName: {
    fontSize: 15,
    fontWeight:'bold',
    width: 170,
  },

  buttonMessage: {
    fontSize: 16,
  },

});
  