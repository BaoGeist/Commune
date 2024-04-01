import React from 'react';
import { View, Text } from 'react-native';

const Chat = ({navigation, route}) => {
  const { chatsData } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>{chatsData[0]}</Text>
    </View>
  );
};

export default Chat;
