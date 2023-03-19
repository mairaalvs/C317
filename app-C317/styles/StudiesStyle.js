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

ellipse:{
    width: 375,
    height: 260,
    justifyContent: 'space-around', 
},

title:{
    padding: 10,
    fontSize: 20,
    textAlign: 'left',
    color: "#2743F3",
    
},

subtitle:{
    padding: 10,
    fontSize: 18,
    textAlign: 'left',
    color: "#7C2AFF",
},

buttonSingIn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: '#4960F9',
    height: 45,
    left: 40,  
    width: "80%",
    marginTop: 0, 
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