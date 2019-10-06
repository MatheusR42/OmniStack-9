import React, { useState, useEffect } from 'react';
import { AsyncStorage, View, KeyboardAvoidingView, Platform, Text, Image, TextInput, TouchableOpacity,  StyleSheet } from 'react-native';

import api from '../services/api';
import logo from '../assets/logo.png';

export default function Login({ navigation }) {
    const [email, setEmail] = useState('');
    const [techs, setTechs] = useState('');

    useEffect(() => {
        AsyncStorage.getItem('user').then(user => {
            if (user) {
                navigation.navigate('List');
            }
        })
    }, []);

    async function handleSubmit() {
        const res = await api.post('/sessions', {
            email
        });

        const { _id } = res.data;
        
        await AsyncStorage.setItem('user', _id);
        await AsyncStorage.setItem('techs', techs);
        navigation.navigate('List')
    }

    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <Image source={logo} />
            <View style={styles.form}>
                <Text style={styles.label}>
                    Seu e-mail *
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Seu e-mail"
                    placeholderTextColor="#999"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.label}>
                    Tecnologias *
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder="Tecnologias de interesse"
                    placeholderTextColor="#999"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={techs}
                    onChangeText={setTechs}
                />

                <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                    <Text style={styles.buttonText}>Encontrar Spots</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    form: {
        paddingHorizontal: 30,
        marginTop: 30,
        alignSelf: 'stretch'
    },
    input: {
        borderColor: "#ddd",
        fontSize: 16,
        borderRadius: 2,
        borderWidth: 1,
        paddingHorizontal: 20,
        height: 44,
        marginBottom: 20,
        color: "#444"
    },
    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
    },
    button: {
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2,
        backgroundColor: '#f05a5b'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
})