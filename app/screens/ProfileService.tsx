import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Alert, Linking } from 'react-native';
import { Input } from 'react-native-elements';
import { useAuth } from '../context/AuthContext';
import { ScreenProp, StackParamList } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ServiceService } from '../services/ServiceService';
import { ServiceSummary } from '../api/services';
import { SPINNER_TEXT_STYLE } from '../utils/Constants';
import Spinner from 'react-native-loading-spinner-overlay/lib';

type Props = NativeStackScreenProps<StackParamList, 'ProfileService'>

const ProfileService = ({ route, navigation }: Props) => {
  const [loading, setLoading] = useState(false);
  const [serviceInfos, setServiceInfos] = useState<ServiceSummary>();
  const paramsRoute = route.params;

  useEffect(() => {
    const getService = async () => {
      try {
        setLoading(true);
        var service = await ServiceService.get(paramsRoute.id);
        setServiceInfos(service.data);
      } catch (e) {
        Alert.alert("Erro ao carregar o perfil do prestador de serviço!");
      } finally {
        setLoading(false);
      }
    }
    getService();
  }, []);

  const link = () => {
    //onLogout!();
    //Alert.alert('Logout', 'Você foi deslogado com sucesso!');
    //Linking.openURL('https://api.whatsapp.com/send?phone=5535998865716');

    try {
      Linking.openURL(serviceInfos!.contactLink);
    } catch (e) {
      //não esta funcionando
      Alert.alert('Erro', 'Erro ao tentar conversar com o prestador(a) de serviçoes!');
    }
  }

  return (
    <View style={styles.specificContainer}>
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={SPINNER_TEXT_STYLE}
      />
      <ImageBackground
        source={require('../assets/Profile.png')}
        style={styles.profile}
      >
        <Image
          source={require('../assets/ImageProfile.jpg')}
          style={styles.imageProfile}
        />

        <View style={styles.inputView}>
          <Text style={styles.textInputView}>
            Nome
          </Text>

          <Input
            // onChangeText={(value: string) => setName(value)}
            cursorColor={'#2743FD'}
            value={serviceInfos?.userName}
          />

          <Text style={styles.textInputView}>
            Serviço oferecido:
          </Text>

          <Input
            // onChangeText={value => setName(value)}
            cursorColor={'#2743FD'}
            value={serviceInfos?.name}
          />

          <Text style={styles.textInputView}>
            Valor do Serviço:
          </Text>

          <Input
            // onChangeText={value => setProfession(value)}
            cursorColor={'#2743FD'}
            value={serviceInfos?.price.toString()}
          />
        </View>

        {serviceInfos?.contactLink ? (
          <TouchableOpacity
            style={styles.buttonSingIn}
            activeOpacity={0.5}
            onPress={() => link()} >
            <Text style={styles.buttonTextStyle}>
              Vamos Conversar
            </Text>
            <View>
              <ImageBackground
                source={require('../assets/Conversation.png')}
                style={styles.buttonImageIconStyle}
              />
            </View>
          </TouchableOpacity>
        ) : (
          <Text>
            Nenhuma informação de contato disponível
          </Text>
        )}

      </ImageBackground>
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

  imageProfile: {
    right: 120,
    marginTop: 50,
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

  inputView: {
    marginTop: 40,
    left: -130,
    width: "148%"
  },

  textInputView: {
    left: 10,
    fontSize: 17,
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
    marginTop: 18,
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
    height: 25,
    width: 40,
    resizeMode: 'contain',
  },
});

export default ProfileService