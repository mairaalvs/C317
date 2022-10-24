import React, { useState } from 'react';
import { Text, View, StyleSheet, StatusBar, SafeAreaView, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ChatItem from './ChatItem';

const currentUser = 32;

const chatsMock = [
  {
    id: 1,
    users: [
      {
        id: 32,
        phone: '+5511999882323',
      },
      {
        id: 99,
        phone: '+5521991234321',
      },
    ],
    messages: [
      {
        id: '-MLjvqRCEhOCF2MAFjng',
        content: 'Oi, tudo bem?',
        sent: '2020-11-09T22:16:40-04:00',
        sentBy: '+5511999990000',
      },
    ],
  },
  {
    id: 2,
    users: [
      {
        id: 32,
        phone: '+5511999882323',
      },
      {
        id: 99,
        phone: '+5532988882222',
      },
    ],
    messages: [
      {
        id: '-MLjvqRCEhOCF2MAFjng',
        content: 'E aquele conteúdo sobre como criar um chat?',
        sent: '2020-11-09T22:16:40-04:00',
        sentBy: '+5511999990000',
      },
    ],
  },
];

export default function Servico() {

  const [text, setText] = useState("");

  return (
    <SafeAreaView style = {specificStyle.view}>
      <View style = {specificStyle.cabecalho}>
        <Icon
          name="chevron-left"
          size={40}
          color='#1E90FF'
          onPress={() => {}}
        />
        <TextInput style = {specificStyle.input}
          placeholder='Buscar'
          value={text}
          onChangeText={(value) => setText(value)}
        />
        <Icon
          name="search"
          size={40}
          color='#1E90FF'
          onPress={() => {}}
        />
      </View>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Chats</Text>
        {chatsMock.map((chat) => (
            <ChatItem chat={chat} currentUser={currentUser} />
        ))}
      </SafeAreaView>
      
    </SafeAreaView>
    );
}

const specificStyle = StyleSheet.create({
  view:{
    marginTop: StatusBar.currentHeight
  },
  cabecalho:{
    flexDirection: "row",
    justifyContent: "space-between"
  },
  input:{
    flex: 1,
    backgroundColor: "white",
    color:'#1E90FF',
    borderRadius: 25,
    fontSize: 20,
    paddingHorizontal: 20,
  },
  container: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginTop: 32,
  },
});