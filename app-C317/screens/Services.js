import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ServicesStyle from '../styles/ServicesStyle';

export default function Services({navigation}) {

  const [text, setText] = useState("");

  const profile = () => {
    navigation.navigate("ProfileService")
  }

  return (
    <ScrollView>
      <SafeAreaView style = {ServicesStyle.view}>
        <View style = {ServicesStyle.header}>
          <TextInput 
            style = {ServicesStyle.input} 
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

        <Text style={ServicesStyle.textSubTitle}>
          Qual serviço você {'\n'} está procurando?
        </Text>

        <TouchableOpacity
          style={ServicesStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
          <View style={ServicesStyle.viewImage}>
            <Image
              style={ServicesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={ServicesStyle.viewArrow}>
              <View style={ServicesStyle.viewText}>
                <Text style={ServicesStyle.buttonName}> 
                  Ana Luiza 
                </Text>

                <Text style={ServicesStyle.buttonMessage}
                      /*onChangeText = {value => setEmail(value)}                    NÂO ESQUECER*/> 
                  Desenvolvedora(a) R$150
                </Text>
              </View>
              <Icon name="chevron-right" style={ServicesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={ServicesStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
          <View style={ServicesStyle.viewImage}>
            <Image
              style={ServicesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={ServicesStyle.viewArrow}>
              <View style={ServicesStyle.viewText}>
                <Text style={ServicesStyle.buttonName}> 
                  João Paulo 
                </Text>

                <Text style={ServicesStyle.buttonMessage}> 
                  Pedreiro(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={ServicesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={ServicesStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
          <View style={ServicesStyle.viewImage}>
            <Image
              style={ServicesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={ServicesStyle.viewArrow}>
              <View style={ServicesStyle.viewText}>
                <Text style={ServicesStyle.buttonName}> 
                  André 
                </Text>

                <Text style={ServicesStyle.buttonMessage}> 
                  Carpinteiro(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={ServicesStyle.viewArrowRight}/>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={ServicesStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
          <View style={ServicesStyle.viewImage}>
            <Image
              style={ServicesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={ServicesStyle.viewArrow}>
              <View style={ServicesStyle.viewText}>
                <Text style={ServicesStyle.buttonName}> 
                  Pedro 
                </Text>

                <Text style={ServicesStyle.buttonMessage}> 
                  Professor(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={ServicesStyle.viewArrowRight} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={ServicesStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
          <View style={ServicesStyle.viewImage}>
            <Image
              style={ServicesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={ServicesStyle.viewArrow}>
              <View style={ServicesStyle.viewText}>
                <Text style={ServicesStyle.buttonName}> 
                  Luciana 
                </Text>

                <Text style={ServicesStyle.buttonMessage}> 
                  Professor(a) R$35 
                </Text>
              </View>
              <Icon name="chevron-right" style={ServicesStyle.viewArrowRight} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={ServicesStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
          <View style={ServicesStyle.viewImage}>
            <Image
              style={ServicesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={ServicesStyle.viewArrow}>
              <View style={ServicesStyle.viewText}>
                <Text style={ServicesStyle.buttonName}> 
                  Júlia 
                </Text>

                <Text style={ServicesStyle.buttonMessage}> 
                  Desenvolvedor(a) R$75 
                </Text>
              </View>
              <Icon name="chevron-right" style={ServicesStyle.viewArrowRight} />
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={ServicesStyle.button} 
          activeOpacity={0.5}
          onPress={() => profile()}
        >
          <View style={ServicesStyle.viewImage}>
            <Image
              style={ServicesStyle.avatar}
              resizeMode='contain'
              source={{uri: 'https://placeimg.com/140/140/any'}}
            />

            <View style={ServicesStyle.viewArrow}>
              <View style={ServicesStyle.viewText}>
                <Text style={ServicesStyle.buttonName}> 
                  Fernando 
                </Text>

                <Text style={ServicesStyle.buttonMessage}> 
                  Pintor(a) R$15 
                </Text>
              </View>
              <Icon name="chevron-right" style={ServicesStyle.viewArrowRight} />
            </View>
          </View>
        </TouchableOpacity> 
      </SafeAreaView>
    </ScrollView>
  );
}