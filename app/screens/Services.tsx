import { Text, View, StyleSheet, Image, SafeAreaView, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ServiceService } from '../services/ServiceService';
import { ScreenProp } from '../types';
import { ServiceSummary } from '../api/services';

// type Props = NativeStackScreenProps<RootStackParamList, 'Services'>;

const Services = ({ navigation }: ScreenProp) => {
  const [loading, setLoading] = useState(false);
  const [text, setText] = useState("");
  const [services, setServices] = useState<ServiceSummary[]>([]);

  const profile = (id: string) => {
    navigation.navigate('ProfileService', { id });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      setLoading(true);
      try {
        var response = await ServiceService.list();
        setServices(response.data);
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation])

  return (
    <ScrollView>
      <SafeAreaView style={styles.view}>
        <View style={styles.header}>
          <TextInput
            style={styles.input}
            placeholder='Buscar'
            value={text}
            onChangeText={(value) =>
              setText(value)}
          >
            <Icon
              name="search"
              size={30}
              color='#3D56FA'
              onPress={() => { }}
            />
          </TextInput>
        </View>

        <Text style={styles.textSubTitle}>
          Qual serviço você {'\n'} está procurando?
        </Text>



        {services.map((service) => (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={() => profile(service.id)}
            key={service.id}
          >
            <View style={styles.viewImage}>
              <Image
                style={styles.avatar}
                resizeMode='contain'
                source={{ uri: 'https://placeimg.com/140/140/any' }}
              />

              <View style={styles.viewArrow}>
                <View style={styles.viewText}>
                  <Text style={styles.buttonName}>
                    {service.userName}
                  </Text>

                  <Text style={styles.buttonMessage}
                    /*onChangeText = {value => setEmail(value)}                    NÂO ESQUECER*/>
                    {service.name} R${service.price}
                  </Text>
                </View>
                <Icon name="chevron-right" style={styles.viewArrowRight} />
              </View>
            </View>
          </TouchableOpacity>
        ))
        }
      </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({

  view: {
    marginTop: 15,
    width: "95%",
    left: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },

  input: {
    flex: 1,
    backgroundColor: "white",
    color: '#2743FD',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
  },

  textSubTitle: {
    padding: 20,
    fontSize: 24,
    right: 20,
    fontWeight: 'bold',
  },

  button: {
    marginVertical: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingBottom: 10,
  },

  viewImage: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 3,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 30,
  },

  viewArrow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  viewText: {
    left: 20,
  },

  buttonName: {
    fontSize: 15,
    fontWeight: 'bold',
    width: 170,
  },

  buttonMessage: {
    fontSize: 16,
    color: '#2743FD'
  },

  viewArrowRight: {
    left: 110,
    alignItems: 'center',
    color: "#2B47FC",
  },
});

export default Services