import React, { useState, useEffect } from 'react';
import { Text, View, TouchableOpacity, StatusBar, Modal } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';

import Card from '../../components/Card';

import styles from './styles';

function Jogo(props) {

    const route = useRoute();

    const {usuario} = route.params;

    function criandoAsCartas() {
        setCartas([
            {
                key: 0,
                nome: 'Verde',
                randomNumber: randomCarta1,
                show: vetorShow[0],
            },
            {
                key: 1,
                nome: 'Verde',
                randomNumber: randomCarta2,
                show: vetorShow[1],
            },
            {
                key: 2,
                nome: 'Amarelo',
                randomNumber: randomCarta3,
                show: vetorShow[2],
            },
            {
                key: 3,
                nome: 'Amarelo',
                randomNumber: randomCarta4,
                show: vetorShow[3],
            },
            {
                key: 4,
                nome: 'Azul',
                randomNumber: randomCarta5,
                show: vetorShow[4],
            },
            {
                key: 5,
                nome: 'Azul',
                randomNumber: randomCarta6,
                show: vetorShow[5],
            },
            {
                key: 6,
                nome: 'Roxo',
                randomNumber: randomCarta7,
                show: vetorShow[6],
            },
            {
                key: 7,
                nome: 'Roxo',
                randomNumber: randomCarta8,
                show: vetorShow[7],
            },
            {
                key: 8,
                nome: 'Vermelho',
                randomNumber: randomCarta9,
                show: vetorShow[8],
            },
            {
                key: 9,
                nome: 'Vermelho',
                randomNumber: randomCarta10,
                show: vetorShow[9],
            },
            {
                key: 10,
                nome: 'Rosa',
                randomNumber: randomCarta11,
                show: vetorShow[10],
            },
            {
                key: 11,
                nome: 'Rosa',
                randomNumber: randomCarta12,
                show: vetorShow[11],
            },
            {
                key: 12,
                nome: 'Marrom',
                randomNumber: randomCarta13,
                show: vetorShow[12],
            },
            {
                key: 13,
                nome: 'Marrom',
                randomNumber: randomCarta14,
                show: vetorShow[13],
            },
            {
                key: 14,
                nome: 'Vinho',
                randomNumber: randomCarta15,
                show: vetorShow[14],
            },
            {
                key: 15,
                nome: 'Vinho',
                randomNumber: randomCarta16,
                show: vetorShow[15],
            },
            {
                key: 16,
                nome: 'Cinza',
                randomNumber: randomCarta17,
                show: vetorShow[16],
            },
            {
                key: 17,
                nome: 'Cinza',
                randomNumber: randomCarta18,
                show: vetorShow[17],
            },
            {
                key: 18,
                nome: 'Lilas',
                randomNumber: randomCarta19,
                show: vetorShow[18],
            },
            {
                key: 19,
                nome: 'Lilas',
                randomNumber: randomCarta20,
                show: vetorShow[19],
            },

        ]);

        setCriado(!criado);
    }

    const [randomCarta1, setRandomCarta1] = useState(Math.random());
    const [randomCarta2, setRandomCarta2] = useState(Math.random());
    const [randomCarta3, setRandomCarta3] = useState(Math.random());
    const [randomCarta4, setRandomCarta4] = useState(Math.random());
    const [randomCarta5, setRandomCarta5] = useState(Math.random());
    const [randomCarta6, setRandomCarta6] = useState(Math.random());
    const [randomCarta7, setRandomCarta7] = useState(Math.random());
    const [randomCarta8, setRandomCarta8] = useState(Math.random());
    const [randomCarta9, setRandomCarta9] = useState(Math.random());
    const [randomCarta10, setRandomCarta10] = useState(Math.random());
    const [randomCarta11, setRandomCarta11] = useState(Math.random());
    const [randomCarta12, setRandomCarta12] = useState(Math.random());
    const [randomCarta13, setRandomCarta13] = useState(Math.random());
    const [randomCarta14, setRandomCarta14] = useState(Math.random());
    const [randomCarta15, setRandomCarta15] = useState(Math.random());
    const [randomCarta16, setRandomCarta16] = useState(Math.random());
    const [randomCarta17, setRandomCarta17] = useState(Math.random());
    const [randomCarta18, setRandomCarta18] = useState(Math.random());
    const [randomCarta19, setRandomCarta19] = useState(Math.random());
    const [randomCarta20, setRandomCarta20] = useState(Math.random());

    const [novasCartas, setNovasCartas] = useState([]);
    const [cartas, setCartas] = useState([]);

    const [criado, setCriado] = useState(false);


    const [vetorShow, setVetorShow] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    const [jogada1, setJogada1] = useState(null);
    const [index1, setIndex1] = useState(null);
    const [jogada2, setJogada2] = useState(null);
    const [index2, setIndex2] = useState(null);

    const [rodada, setRodada] = useState(0);
    const [parEncontrado, setParEncontrado] = useState(0);
    const [fim, setFim] = useState(false);
    const [infoGravar, setInfoGravar] = useState(props.partidas); //Recebe do Redux as partidas que já foram gravadas


    function ordenando() {
        cartas.sort(function (a, b) {
            return a.randomNumber - b.randomNumber;
        });

        setNovasCartas(cartas);
    }


    function jogada(nomeCarta, index) {
        if (jogada1 == null) {
            setJogada1(nomeCarta);
            setIndex1(index);
        } else if (jogada1 != null && jogada2 == null) {
            setJogada2(nomeCarta);
            setIndex2(index);
            setRodada(rodada + 1);
        }
    }

    function vendoSeMatch() {
        if (jogada1 != null && jogada2 != null && jogada1 == jogada2) {
            setJogada1(null);
            setJogada2(null);
            setParEncontrado(parEncontrado + 1);
        } else if (jogada1 != null && jogada2 != null && jogada1 != jogada2) {
            setJogada1(null);
            setJogada2(null);
            vetorShow[index1] = false;
            vetorShow[index2] = false;
        }
    }

    function virandoCarta(index) {
        vetorShow[index] = !vetorShow[index];
    }

    function gravarNoRedux() {
        infoGravar.push({
            usuario: usuario,
            rodada: rodada,
        });
        props.setPartidas(infoGravar); 
        console.log(props.partidas);
    }

    function reiniciar() {
        setRandomCarta1(Math.random());
        setRandomCarta2(Math.random());
        setRandomCarta3(Math.random());
        setRandomCarta4(Math.random());
        setRandomCarta5(Math.random());
        setRandomCarta6(Math.random());
        setRandomCarta7(Math.random());
        setRandomCarta8(Math.random());
        setRandomCarta9(Math.random());
        setRandomCarta10(Math.random());
        setRandomCarta11(Math.random());
        setRandomCarta12(Math.random());
        setRandomCarta13(Math.random());
        setRandomCarta14(Math.random());
        setRandomCarta15(Math.random());
        setRandomCarta16(Math.random());
        setRandomCarta17(Math.random());
        setRandomCarta18(Math.random());
        setRandomCarta19(Math.random());
        setRandomCarta20(Math.random());
        setRodada(0);
        setParEncontrado(0);
        setVetorShow([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);

    }

    useEffect(() => {
        criandoAsCartas();
    }, [randomCarta1]);

    useEffect(() => {
        ordenando();
    }, [criado]);

    useEffect(() => {
        vendoSeMatch();
    }, [jogada2]);

    useEffect(() => {
        if (parEncontrado == 10) {
            setFim(true);
            gravarNoRedux();
        }
    }, [parEncontrado]);



    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />

            <Text style={styles.text}>Jogador: {usuario}</Text>
            <Text style={styles.text}>Rodada: {rodada}</Text>
            <Text style={styles.text}>Pares encontrados: {parEncontrado}</Text>

            <View style={styles.containerCartas}>
                {novasCartas.map((carta) => (
                    <TouchableOpacity onPress={() => { jogada(carta.nome, carta.key), virandoCarta(carta.key), criandoAsCartas() }}>
                        <Card nome={carta.nome} show={carta.show} />
                    </TouchableOpacity>
                ))}
            </View>

            <Modal visible={fim} animationType='fade' transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.containerModal}>
                        <Text style={[styles.textWhite, { fontSize: 25, fontWeight: 'bold' }]}>Parabéns!</Text>
                        <Text style={[styles.textWhite, { fontSize: 15 }]}>Você finalizou o jogo com {rodada} rodadas!</Text>
                        <TouchableOpacity onPress={() => { setFim(false), reiniciar(), criandoAsCartas() }}>
                            <View style={styles.botaoModal}>
                                <Text style={{ color: 'green', fontSize: 15 }}>Reiniciar o jogo</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => { setFim(false), navigation.navigate('Ranking') }}>
                            <View style={styles.botaoModal}>
                                <Text style={{ color: 'green', fontSize: 15 }}>Ver o ranking</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>


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

export default connect(mapStateToProps, mapDispatchToProps)(Jogo);