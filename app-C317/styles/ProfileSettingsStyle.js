import { StyleSheet } from 'react-native';

export default StyleSheet.create({
specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
},

profile:{
    width: 250, 
    height: 250,
    left: 130,
},

settingsImage:{
    flexDirection: 'row',
    justifyContent: 'space-evenly',
},

imageProfile:{
    right: 160,
    marginTop: 15,
    height: 150,
    width: 150,
    resizeMode: 'contain',
    borderRadius: 75,
    //borderWidth: 1,
    shadowColor:'#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
    shadowOpacity: 0.8,
    shadowRadius: 2 
},

settings:{
    marginTop: 50,
    right: 150,
    height: 30,
    width: 30,
    resizeMode: 'contain',
},

inputView:{
    marginTop:10,
    left: -130,
},

services:{
    right: 130,
},

textInputView:{
    left: 10,
    fontSize: 17,
    marginTop:-10,
},

switch:{
    flexDirection: 'row',
    justifyContent: 'space-between',
},

switchText:{
    right: 30,
},

viewService:{
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-evenly',
},

buttonService:{
    flexDirection: 'row', 
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 35,
    left: 10,  
    //width: "80%",
    marginTop: 7, 
    borderRadius: 16,
    borderWidth: 2,
    borderColor:  '#2743FB'
},
  
buttonServiceStyle:{
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
    borderColor:  '#2743FB'
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
});