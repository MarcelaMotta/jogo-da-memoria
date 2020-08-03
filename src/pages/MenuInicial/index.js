import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StatusBar, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';


export default function MenuInicial() {

    // A variável usuario grava o nome do usuario, e posteriormente será enviado a tela do Jogo
    const [usuario, setUsuario] = useState('');

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View>
                <Text style={{ fontSize: 30 }}>Jogo da memória</Text>
                <View>
                    <TextInput
                        textAlignVertical='top'
                        placeholder='Digite seu nome'
                        style={styles.input}
                        value={usuario}
                        onChangeText={text => setUsuario(text)}
                    />
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Jogo', {usuario: usuario})} >
                    <View style={styles.botao}>
                        <Text style={styles.textBotao}>Entrar</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}