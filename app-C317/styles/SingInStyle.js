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
    top: 330,
    fontSize: 30,
    left: 20,
    color: "#000",
    fontWeight:'bold',
},

inputView:{
    color: "#3A3A3A",
    marginTop: 330,
},

password:{
    color: "#2B47FC",
    marginLeft: 10,
    fontSize: 15,
},

buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,  
    width: "80%",
    marginTop: 60, 
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