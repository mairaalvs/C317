import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MessagesStyle from '../styles/MessagesStyle';

export default function Notification({navigation}) {
  const [text, setText] = useState("");

  const chat = () => {
    navigation.navigate("Chat")
  }

  return (
    <ScrollView>
      <SafeAreaView style = {MessagesStyle.view}>
        <View style = {MessagesStyle.header}>
          <TextInput 
              style = {MessagesStyle.input} 
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

        <Text style={MessagesStyle.textSubTitle}>
          Notificações
        </Text>

        <TouchableOpacity
          style={MessagesStyle.button} 
          activeOpacity={0.5}
          onPress={() => chat()}
        >
          <View style={MessagesStyle.viewImage}>
            <Image
              style={MessagesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={MessagesStyle.viewArrow}>
              <View style={MessagesStyle.viewText}>
                <Text style={MessagesStyle.buttonName}> 
                  Ana Luiza 
                </Text>

                <Text style={MessagesStyle.buttonMessage}> 
                  Olá! 
                </Text>
              </View>
              <Icon name="chevron-right" style={MessagesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={MessagesStyle.button} 
          activeOpacity={0.5}
          onPress={() => chat()}
        >
          <View style={MessagesStyle.viewImage}>
            <Image
              style={MessagesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={MessagesStyle.viewArrow}>
              <View style={MessagesStyle.viewText}>
                <Text style={MessagesStyle.buttonName}> 
                  João Paulo 
                </Text>

                <Text style={MessagesStyle.buttonMessage}> 
                  Olá! 
                </Text>
              </View>
              <Icon name="chevron-right" style={MessagesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={MessagesStyle.button} 
          activeOpacity={0.5}
          onPress={() => chat()}
        >
          <View style={MessagesStyle.viewImage}>
            <Image
              style={MessagesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={MessagesStyle.viewArrow}>
              <View style={MessagesStyle.viewText}>
                <Text style={MessagesStyle.buttonName}> 
                  André 
                </Text>

                <Text style={MessagesStyle.buttonMessage}> 
                  Olá! 
                </Text>
              </View>
              <Icon name="chevron-right" style={MessagesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={MessagesStyle.button} 
          activeOpacity={0.5}
          onPress={() => chat()}
        >
          <View style={MessagesStyle.viewImage}>
            <Image
              style={MessagesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={MessagesStyle.viewArrow}>
              <View style={MessagesStyle.viewText}>
                <Text style={MessagesStyle.buttonName}> 
                  Pedro 
                </Text>

                <Text style={MessagesStyle.buttonMessage}> 
                  Olá! 
                </Text>
              </View>
              <Icon name="chevron-right" style={MessagesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={MessagesStyle.button} 
          activeOpacity={0.5}
          onPress={() => chat()}
        >
          <View style={MessagesStyle.viewImage}>
            <Image
              style={MessagesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={MessagesStyle.viewArrow}>
              <View style={MessagesStyle.viewText}>
                <Text style={MessagesStyle.buttonName}> 
                  Luciana 
                </Text>

                <Text style={MessagesStyle.buttonMessage}> 
                  Olá! 
                </Text>
              </View>
              <Icon name="chevron-right" style={MessagesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={MessagesStyle.button} 
          activeOpacity={0.5}
          onPress={() => chat()}
        >
          <View style={MessagesStyle.viewImage}>
            <Image
              style={MessagesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={MessagesStyle.viewArrow}>
              <View style={MessagesStyle.viewText}>
                <Text style={MessagesStyle.buttonName}> 
                  Júlia 
                </Text>

                <Text style={MessagesStyle.buttonMessage}> 
                  Olá! 
                </Text>
              </View>
              <Icon name="chevron-right" style={MessagesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={MessagesStyle.button} 
          activeOpacity={0.5}
          onPress={() => chat()}
        >
          <View style={MessagesStyle.viewImage}>
            <Image
              style={MessagesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={MessagesStyle.viewArrow}>
              <View style={MessagesStyle.viewText}>
                <Text style={MessagesStyle.buttonName}> 
                  Fernando 
                </Text>

                <Text style={MessagesStyle.buttonMessage}> 
                  Olá! 
                </Text>
              </View>
              <Icon name="chevron-right" style={MessagesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>  
      </SafeAreaView>
    </ScrollView>
  );
}