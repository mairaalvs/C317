import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, ScrollView, Switch, Alert } from 'react-native';
import { Input } from 'react-native-elements';
import { StackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ServiceService } from '../services/ServiceService';
import { UserService } from '../services/UserService';
import { SPINNER_TEXT_STYLE } from '../utils/Constants';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import { ServiceCreateRequest } from '../api/services';

type Props = NativeStackScreenProps<StackParamList, 'ProfileSettings'>

const ProfileSettings = ({ route, navigation }: Props) => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [serviceName, setServiceName] = useState('')
  const [contactLink, setContactLink] = useState('')
  const [servicePrice, setServicePrice] = useState('')
  const [ligado, setLigado] = useState(true)
  const [loading, setLoading] = useState(false);

  const paramsRoute = route.params;

  const save = async () => {
    try {
      setLoading(true);

      await UserService.update({
        name,
        address
      });

      if (ligado) {
        if (paramsRoute.serviceId) {          
          await ServiceService.update(paramsRoute.serviceId, {
            name: serviceName,
            contactLink: contactLink,
            price: parseFloat(servicePrice),
          });
          Alert.alert("Serviço atualizado com sucesso!");
        } else {
          var serviceRequest: ServiceCreateRequest = {
            name: serviceName,
            description: 'Meu serviço',
            contactLink: contactLink,
            price: parseFloat(servicePrice),
            userId: paramsRoute.userId,
          };
          await ServiceService.create(serviceRequest);
          Alert.alert("Serviço ativado com sucesso!");
        }
      } else if (!ligado && paramsRoute.serviceId) {        
        await ServiceService.delete(paramsRoute.serviceId);
        Alert.alert("Serviço desativado com sucesso!");
      }
      navigation.goBack();
    } catch (e) {
      Alert.alert("Erro ao salvar as informações!");
    } finally {
      setLoading(false);
    }
  }

  const toggleLigado = () => setLigado(!ligado)

  return (
    <View style={styles.specificContainer}>
      <ScrollView>
        <Spinner
          visible={loading}
          textContent={'Loading...'}
          textStyle={SPINNER_TEXT_STYLE}
        />
        <ImageBackground
          source={require('../assets/Profile.png')}
          style={styles.profile}
        >
          <View style={styles.settingsImage}>
            <Image
              source={require('../assets/ImageProfile.jpg')}
              style={styles.imageProfile}
            />
          </View>

          <View style={styles.inputView}>
            <Text style={styles.textInputViewNameEnd}>
              Nome
            </Text>

            <Input
              onChangeText={value => setName(value)}
              cursorColor={'#2743FD'}
            />

            <Text style={styles.textInputViewNameEnd}>
              Endereço
            </Text>

            <Input
              onChangeText={value => setAddress(value)}
              cursorColor={'#2743FD'}
            />

          </View>

          <View style={styles.services}>
            <View style={styles.switch}>
              <Text style={styles.textInputViewSwitch}>
                Oferecer Serviço:
              </Text>

              <Switch
                style={styles.switchText}
                trackColor={{ false: "#777", true: "#8bf" }}
                thumbColor={ligado ? "#00f" : "#444"}
                value={ligado}
                onValueChange={toggleLigado}
              >
              </Switch>
            </View>

            {ligado ? (
              <>
                <Text style={styles.textInputView}>
                  Serviço oferecido:*
                </Text>

                <Input
                  onChangeText={value => setServiceName(value)}
                  cursorColor={'#2743FD'}
                />

                <Text style={styles.textInputView}>
                  Valor do Serviço:*
                </Text>

                <Input
                  onChangeText={value => setServicePrice(value)}
                  cursorColor={'#2743FD'}
                />

                <Text style={styles.textInputView}>
                  Link de contato no WhatsApp:*
                </Text>

                <Input
                  onChangeText={value => setContactLink(value)}
                  cursorColor={'#2743FD'}
                />

                <Text style={styles.requiredField}>
                  *Campos com preenchimento obrigatório!
                </Text>

              </>
            ) : null}

          </View>
          <TouchableOpacity
            style={styles.buttonSingIn}
            activeOpacity={0.5}
            onPress={() => save()} >
            <Text style={styles.buttonTextStyle}>
              Concluido
            </Text>
            <View>
              <ImageBackground
                source={require('../assets/Arrow.png')}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableOpacity>
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },

  profile: {
    width: 250,
    height: 250,
    left: 130,
  },

  settingsImage: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  imageProfile: {
    right: 160,
    marginTop: 15,
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 75,
    //borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2
  },

  settings: {
    marginTop: 50,
    right: 150,
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },

  inputView: {
    marginTop: 10,
    left: -130,
    width: "149%"
  },

  services: {
    right: 130,
    width: "150%"
  },

  textInputViewNameEnd: {
    left: 10,
    fontSize: 17,
    marginTop: -8,
    width: "128%",
    fontWeight: 'bold',
  },

  textInputViewSwitch: {
    left: 10,
    fontSize: 17,
    marginTop: -8,
    width: "128%",
    fontWeight: 'bold',
  },

  textInputView: {
    left: 10,
    fontSize: 17,
    marginTop: -8,
    width: "128%",
    fontWeight: 'bold',
  },

  textSwitch: {
    left: 10,
    fontSize: 17,
    marginTop: -10,
    width: "128%",
  },

  switch: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  switchText: {
    right: 290,
    marginTop: -10
  },

  viewService: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  buttonService: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 35,
    left: 10,
    //width: "80%",
    marginTop: 7,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: '#2743FB'
  },

  buttonServiceStyle: {
    color: '#2743FB',
    marginLeft: 20,
    marginRight: 20,
    fontSize: 10,
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
    borderColor: '#2743FB'
  },

  buttonTextStyle: {
    color: '#2743FB',
    marginLeft: 15,
    fontSize: 18,

  },

  buttonImageIconStyle: {
    right: 10,
    height: 20,
    width: 25,
    resizeMode: 'contain',
  },

  requiredField: {
    left: 10,
    fontSize: 14,
    marginTop: -10,
    width: "128%"
  }
});

export default ProfileSettings