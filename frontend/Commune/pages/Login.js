import { StatusBar } from 'expo-status-bar';
import { TextInput,TouchableOpacity, Text, View, Image } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';
import axios from 'axios';
import {API_URL} from "@env";

export default function Login({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        console.log("Login pressed.")
    }

    const handleLogin = async () => {
        console.log("login pressed")
        try {
            const response = await axios.post(process.env.API_URL + 'login/', {
                email: email,
                password: password,
            });
      
          // Handle the response from the server
          console.log('Response from server:', response.data);
          navigation.navigate('Log Out')
        } catch (error) {
          // Handle errors
          console.error('Error making login request:', error);
        }
      };

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
            <View style={tw`pb-10`}>
                <Image
                    source={require('../assets/logo_with_text.png')}
                    style={{ width: 400, height: 200 }}
                />
            </View>
            
            <View style={tw`mb-6`}>
                <TextInput
                style={tw`bg-purple-100 px-1 border border-purple-500 rounded w-64 h-12 text-xl`}
                placeholder="Email"
                placeholderTextColor="#003f5c"
                value={email}
                onChangeText={(text) => setEmail(text)}
                />
            </View>

            <View style={tw`mb-6`}>
                <TextInput
                style={tw`bg-purple-100 px-1 border border-purple-500 rounded w-64 h-12 text-xl`}
                placeholder="Password"
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                />
            </View>
            
            <TouchableOpacity onPress={handleLogin} style={tw`bg-purple-500 px-1 rounded w-32 h-12 justify-center`}>
                <Text style={tw`text-white text-center font-bold text-xl`}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
