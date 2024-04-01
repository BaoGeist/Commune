import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Summarize from './SummarizeScreen';
import Chat from './ChatsScreen';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Summarize} options={{ headerShown: false }}/>
      <Tab.Screen name="Profile" component={Chat} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
};

export default Home;