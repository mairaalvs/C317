import { ImageBackground, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { ScreenProp } from '../types';



const Confirmation = ({navigation}: ScreenProp) => {
  const login = async() => {
    navigation.navigate("Welcome")
  }

  return (
    <View style={[styles.specificContainer]}>
      <ImageBackground
        source={require('../assets/SignInUp.png')}
        style={styles.signIn}
      >
        <Image
          source={require('../assets/Hourglass.png')}
          style={styles.logo}
        />

        <Text style={styles.title}>
          Seja bem-vindo(a)!
        </Text>
      
        <Text style={styles.subtitle}>
          Um link será enviado para o seu endereço de email informado no cadastro para confirmação da conta.
        </Text>

        <TouchableOpacity
          style={styles.buttonSingIn} 
          activeOpacity={0.5}
          onPress={() => login()}
        >
          <Text style={styles.buttonTextStyle}> 
            Ok 
          </Text>

          <View>
            <ImageBackground 
              source={require('../assets/Circles-Arrow.png')} 
              style={styles.buttonImageIconStyle} 
            />
          </View>  
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  specificContainer: {
      backgroundColor: "#fff"
  },
  
  signIn:{
      flex: 1,
      width: 380, 
      height: 340,
  },
  
  logo:{
      top: 40,
      left: 45,
  },
  
  title:{
      padding: 40,
      fontSize: 32,
      left: 3,
      textAlign: 'left',
      color: "#fff",
      shadowColor:'#000',
      shadowOffset: {
          width: 0,
          height: 7,
      },
      shadowOpacity: 0.58,
      shadowRadius: 4.65,
      marginTop: 25
  },
  
  subtitle:{
      padding: 20,
      marginTop: 180,
      fontSize: 18,
      left: -10,
      color: "#3f3f3f",
      height: 200,
      textAlign: 'justify'
  },
  
  buttonSingIn: {
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      backgroundColor: '#4960F9',
      height: 45,
      left: 40,  
      width: "80%",
      marginTop: 35, 
      borderRadius: 16, 
  },
  
  buttonTextStyle: {
      color: '#fff', 
      marginLeft: 15,
      fontSize: 18,
  },
  
  buttonImageIconStyle: {
      right: 2,
      padding: 22.5,
      height: 40,
      width: 60,
      resizeMode: 'contain',
  },
  });

export default Confirmation