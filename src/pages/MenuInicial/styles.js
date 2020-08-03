import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    botao: {
        height:50,
        width: 180,
        backgroundColor: '#de9f0d',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#db9c09',
        elevation: 4,
    },
    textBotao: {
        color: '#FFFFFF',
        fontSize: 14,
    },
    input: {
        width: '100%',
        borderColor: '#f5f5f5',
        borderBottomWidth: 1,
        padding: 10,
        marginTop: 80,
        marginBottom: 50,
        textAlignVertical: 'center'
    },
});