import { StyleSheet } from 'react-native';

export default StyleSheet.create({
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
    padding: 30,
    top: 30,
    fontSize: 30,
    left: -5,
    fontWeight:'bold',
},

inputView:{
    marginTop: 120,
},

area: {
    flexDirection: 'row',
    width: '90%',
    height: 40,
    alignItems: 'center',
    marginTop: 0,
},

name:{
    marginTop: 0,
},

inputEmail:{
    marginTop: 20
},

messageErrorEmail:{
    color: '#FF0000',
    fontSize: 14,
    marginLeft: 10,
    marginTop: -3,
    height: 16,
},

inputPassword: {
    flexDirection: 'row',
    width: '100%',
    height: 40,
    alignItems: 'center',
    //left: 12,
    fontSize: 19,
    //borderBottomWidth: 0.8,
    borderBottomColor: "#808080",
    marginTop: 45
},

messageErrorPassword:{
    color: '#FF0000',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 9,
    height: 18,
},

cpf:{
    marginTop: 60,
},

messageErrorCpf:{
    color: '#FF0000',
    fontSize: 14,
    marginLeft: 10,
    marginTop: 17,
    height: 18,
},

buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,  
    width: "80%",
    marginTop: 250, 
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

loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center'
}
});