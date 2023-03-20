import { StyleSheet } from 'react-native';

export default StyleSheet.create({
view:{
    marginTop: 15,
    width: "95%",
    left: 10,
},

header:{
    flexDirection: "row",
    justifyContent: "space-between"
},

input:{
    flex: 1,
    backgroundColor: "white",
    color:'#2743FD',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
},

textSubTitle: {
    padding: 20,
    fontSize: 24,
    right: 20,
    fontWeight:'bold',
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
    fontWeight:'bold',
    width: 170,
},

buttonMessage: {
    fontSize: 16,
},

viewArrowRight: {
    left: 110,
    alignItems: 'center',
    size:15,
    color:"#2B47FC",
},
});