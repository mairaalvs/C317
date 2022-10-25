import React from 'react';
import { Text, View } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat'

export default function Chat({navigation}) {

    const user = {
        _id: 1,
        name: 'Maria',
        avatar: 'url'
    }

    const messages = [
        {
            _id: 1,
            text: 'Ola pessoal',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Joao',
                avatar: 'teste',
            },
        },
        {
            _id: 1,
            text: 'Tudo bom!',
            createdAt: new Date(),
            user: {
                _id: 2,
                name: 'Joao',
                avatar: 'teste'
            },
        },
    ]

    function onSendMessage(messages) {
        console.log(messages);
    }

  return (
    <GiftedChat user={user} messages={messages} onSend={onSendMessage} />
  );
}