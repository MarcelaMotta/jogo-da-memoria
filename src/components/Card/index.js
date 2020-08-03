import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';


import styles from './styles';

export default function Card(props) {

    return (
        <View style={styles.container}>
            {props.show && <Text>{props.nome}</Text>}
        </View>
    );
}