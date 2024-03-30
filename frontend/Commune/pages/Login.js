import { StatusBar } from 'expo-status-bar';
import { TextInput,TouchableOpacity, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handlePress = () => {
        console.log("Login pressed.")
    }

    return (
        <View>
            <View>
                <TextInput
                placeholder="Email."
                placeholderTextColor="#003f5c"
                value={email}
                onChangeText={(e) => setEmail(e)}
                /> 
            </View> 
            <View>
                <TextInput
                placeholder="Password."
                placeholderTextColor="#003f5c"
                secureTextEntry={true}
                value={password}
                onChangeText={(e) => setPassword(e)}
                /> 
            </View>
            <Button title="LOGIN" onPress={handlePress}></Button>
        </View>
    );
}
