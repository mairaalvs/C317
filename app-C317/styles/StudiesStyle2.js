import { StyleSheet } from 'react-native';

export default StyleSheet.create({
view:{
    marginTop: 15,
    width: "95%",
    left: 10,
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

imageProfile:{
    marginTop: 20,
    height: 100,
    width: 100,
    resizeMode: 'contain',
    borderRadius: 50,
    borderWidth: 1,
},

viewArrow: {
    flexDirection: 'row',
    alignItems: 'center',
},

viewText: {
    left: 20,
},

buttonName: {
    fontSize: 18,
    fontWeight:'bold',
    width: 170,
    textAlign: 'auto'
},

buttonMessage: {
    marginTop: 10,
    fontSize: 18,
    color: '#2743FD'
},
});