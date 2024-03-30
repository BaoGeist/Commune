import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Summarize from './Summarize';
import Chat from './Chat';

const Tab = createBottomTabNavigator();

const Home = ({navigation}) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Settings" component={Summarize} />
      <Tab.Screen name="Profile" component={Chat} />
    </Tab.Navigator>
  );
};

export default Home;
