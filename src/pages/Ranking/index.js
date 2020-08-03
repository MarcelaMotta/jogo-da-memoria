import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';


import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';

function Ranking(props) {

    const [partidas, setPartidas] = useState(props.partidas);

    function ordenando() {
        partidas.sort(function (a, b) {
            return a.rodada - b.rodada;
        });
    }

    useEffect(() => {
        ordenando();
    }, [partidas]);


    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.title}>
                <Text style={{ fontSize: 25 }}>Ranking</Text>
            </View>

            <FlatList
                data={partidas}
                renderItem={({ item: partidas }) => (
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <Text>{partidas.usuario}</Text>
                        <Text>{partidas.rodada}</Text>
                    </View>
                )}
                keyExtractor={partidas => partidas}
            />

        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        partidas: state.userReducer.partidas,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPartidas: (partidas) => dispatch({ type: 'SET_PARTIDAS', payload: { partidas } }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranking);
