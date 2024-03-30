import { StatusBar } from 'expo-status-bar';
import { TextInput,TouchableOpacity, Text, View, Button } from 'react-native';
import React, { useState } from 'react';
import tw from 'twrnc';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        console.log("Login pressed.")
    }

    return (
        <View style={tw`flex-1 justify-center items-center bg-white`}>
        <View style={tw`mb-6`}>
            <TextInput
            style={tw`bg-blue-100 px-1 border border-blue-500 rounded w-64`}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={(text) => setEmail(text)}
            />
        </View>
        <View style={tw`mb-6`}>
            <TextInput
            style={tw`bg-blue-100 px-1 border border-blue-500 rounded w-64`}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            />
        </View>
            <TouchableOpacity onPress={handlePress} style={tw`bg-blue-500 px-1 rounded w-32`}>
                <Text style={tw`text-white text-center font-bold`}>LOGIN</Text>
            </TouchableOpacity>
        </View>
    );
}
