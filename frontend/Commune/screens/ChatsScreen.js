import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ChatDisplay = ({chatsData}) => {
  const chatName = chatsData;
  const lastMessage = "placeholder message"
  const unreadCount = 3;

  return (
    <View style={styles.card}>
      <View style={styles.infoContainer}>
        <Text style={styles.chatName}>{chatName}</Text>
        <Text style={styles.lastMessage}>{lastMessage}</Text>
      </View>
      <View style={styles.unreadContainer}>
        {unreadCount > 0 && (
          <Text style={styles.unreadText}>{unreadCount}</Text>
        )}
      </View>
    </View>
  )
}

const ChatsScreen = ({navigation, route}) => {
  const { chatsData } = route.params;
  const chatsDataArray = Object.values( chatsData );

  return (
    <View style={{ flex: 1, paddingTop: 40 }}>
      <ScrollView style={styles.scrollView}>
        {chatsDataArray.map(chat => (
          <ChatDisplay chatsData={chat}></ChatDisplay>
        ))}
      </ScrollView>
    </View>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  infoContainer: {
    flex: 1,
    marginRight: 10,
  },
  chatName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessage: {
    fontSize: 14,
    color: '#666',
  },
  unreadContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6347',
    borderRadius: 12,
    width: 24,
    height: 24,
  },
  unreadText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1, // Fills the available height for scrolling
  },
});
