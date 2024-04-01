import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SummarizeScreen from './SummarizeScreen';
import ChatScreen from './ChatsScreen';
import SupportStatusScreen from './SupportStatusScreen';

const Tab = createBottomTabNavigator();

const Home = ({navigation, route}) => {

  const { chatsData } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Summarize" 
        component={SummarizeScreen} 
        options={{ 
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="albums" color={color} size={size} />
          ),  }}/>
      <Tab.Screen 
        name="Chats" 
        component={ChatScreen} 
        options={{ 
          headerShown: false, 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox" color={color} size={size} />
          ), }}
        initialParams={{ chatsData: chatsData }}
      />
      <Tab.Screen 
        name="Support"
        component={SupportStatusScreen}
        options={{ 
          headerShown:false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ), }}
      />
    </Tab.Navigator>
  );
};

export default Home;
