import { StyleSheet } from 'react-native';

export default StyleSheet.create({
specificContainer: {
    backgroundColor: "#fff",
    flex: 1,
},

view:{
    marginTop: 0,
    flexDirection: 'column',
    alignItems: 'center',
},

group:{
    
},

ellipse:{
    width: 375,
    height: 260,
    justifyContent: 'center',
    marginTop: 170,
},

title:{
    padding: 10,
    fontSize: 20,
    textAlign: 'left',
    color: "#2743F3",
    marginTop: -330,
},

subtitle:{
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    color: "#7C2AFF",
    marginTop: 15,
},

buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,  
    width: "80%",
    marginTop: 40, 
    borderRadius: 16,
    //marginEnd: 10, 
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