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
    right: 145,
    marginTop: 10,
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
    marginTop: 125,
    right: 110,
    height: 35,
    width: 35,
    resizeMode: 'contain',
    //borderRadius: 16,
    //borderWidth: 2,
    //borderColor:  '#2743FB'
},

inputView:{
    marginTop:30,
    left: -130,
},

textInputView:{
    left: 10,
    fontSize: 17,
},

buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    height: 45,
    left: -70,  
    //width: "80%",
    marginTop: 30, 
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