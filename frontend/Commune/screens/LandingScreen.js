import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TextInput,TouchableOpacity, Text, View, Image, StyleSheet, KeyboardAvoidingView } from 'react-native';

import Summarize from './SummarizeScreen';
import Chat from './ChatsScreen';

const Tab = createBottomTabNavigator();

const Home = ({navigation, route}) => {

  const { chatsData } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Summarize} options={{ headerShown: false }}/>
      <Tab.Screen 
        name="Profile" 
        component={Chat} 
        options={{ headerShown: false }}
        initialParams={{ chatsData: chatsData }}
      />
    </Tab.Navigator>
  );
};

export default Home;
