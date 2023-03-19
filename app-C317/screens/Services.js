import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ServicesStyle from '../styles/ServicesStyle';

export default function Services({navigation}) {

  const [text, setText] = useState("");

  const profile = () => {
    navigation.navigate("Profile2")
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

        <Text style={specificStyle.textSubTitle}>
          Qual serviço você {'\n'} está procurando?
        </Text>

        <TouchableOpacity
          style={specificStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
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

                <Text style={specificStyle.buttonMessage}
                      /*onChangeText = {value => setEmail(value)}                    NÂO ESQUECER*/> 
                  Desenvolvedora(a) R$150
                </Text>
              </View>
              <Icon name="chevron-right" style={specificStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={specificStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
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
                  Pedreiro(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={specificStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={specificStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
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
                  Carpinteiro(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={specificStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={specificStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
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
                  Professor(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={specificStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
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
                  Professor(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={specificStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
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
                  Desenvolvedor(a) R$75 
                </Text>
              </View>
              <Icon name="chevron-right" style={specificStyle.viewArrowRight} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={specificStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
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
                  Pintor(a) R$15 
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