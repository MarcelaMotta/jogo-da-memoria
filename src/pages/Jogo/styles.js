import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        paddingVertical: 20
    },
    containerCartas: {
        flexDirection:'row', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginVertical: 20,
    },
    modal: {
        backgroundColor: '#000',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.9,
    },
    containerModal: {
        backgroundColor: '#424242', 
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderRadius: 5,
        padding: 20
    },
    text: {
        fontSize: 18,
    },
    textWhite: {
        color: '#fff',
        marginBottom: 10,
    },
    botaoModal: {
        height:26,
        width: 115,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: 'green',
        elevation: 4,
    },
});