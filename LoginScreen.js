import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        const checkCredentials = async () => {
            try {
                const storedCredentials = await AsyncStorage.getItem('userCredentials');
                if (storedCredentials !== null) {
                    const credentials = JSON.parse(storedCredentials);
                    // Check if stored credentials are valid
                    if (credentials.id === '12345' && credentials.password === '54321') {
                        navigation.navigate('UserDetails');
                    }
                }
            } catch (error) {
                console.error('Error retrieving data', error);
            }
        };

        checkCredentials();
    }, [navigation]); // Include navigation in dependency array

    const handleLogin = async () => {
        if (id === '12345' && password === '54321') {
            try {
                await AsyncStorage.setItem('userCredentials', JSON.stringify({ id, password }));
                navigation.navigate('UserDetails');
            } catch (error) {
                console.error('Error saving data', error);
            }
        } else {
            alert('Invalid ID or Password');
        }
    };
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="ID"
                onChangeText={setId}
                value={id}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={setPassword}
                value={password}
                secureTextEntry
            />
            <View style={styles.button}>
                <Button title="Login" onPress={handleLogin} />
            </View>
        </View>
    );

}
const styles = {
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f5f5f5', // Optional background color
    },
    input: {
        width: '80%',
        height: 50,
        marginVertical: 10,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 25,
        fontSize: 16,
        backgroundColor: 'white', // Or any other background color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    button: {
        marginTop: 20,
        width: '80%',
        borderRadius: 25,
        // Additional styling for the button if needed
    },
    // Other styles...
};
