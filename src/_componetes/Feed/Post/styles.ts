import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../../app.json';

const {height, width} = Dimensions.get('screen')


const styles = StyleSheet.create({
    container: {
        marginVertical: 16
    },
    containerUsuario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12,
        marginBottom: 20
    },
    imagemUsuario: {
        width: 32,
        height: 32,
        borderRadius: 10
    },
    textUsuarioNome: {
        marginLeft:8,
        fontFamily: 'biennale-bold',
        fontSize: 12,
        color: colors.grayColor04
    },
    postImagem: {
        height: height/2,
        width: width
    },
    containerCurtidoEComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 16,
        marginTop: 10
    },
    textCurtida: {
        marginLeft: 12,
        fontSize: 12,
        color: colors.grayColor04,
        fontFamily: 'biennale'
    },
    textCurtidaNegrito: {
        fontFamily: 'biennale-bold'
    },
    icone: {
        marginLeft: 12
    },
    containerDescricao: {
        marginTop:10,
        marginHorizontal: 16,
        flexDirection: 'row',
    },
    textDescricao: {
        fontSize: 12,
        fontFamily: 'biennale',
        color: colors.grayColor04,
        width: width / 1.17
    },
    textMaisMenos: {
        color: colors.greenWaterColor
    },
    containerMaisMenos: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        color: colors.grayColor04
    },
    botaoExcluir: {
        width: 30,
        height: 30,
        marginLeft: 250
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalHeaderText: {
        fontFamily: 'biennale-bold',
        fontSize: 14,
        marginBottom: 20,
        color: colors.grayColor04,
    },
    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '70%',
    },
    modalButton: {
        padding: 10,
        borderRadius: 5,
    },
    confirmButton: {
        backgroundColor: colors.MediumSpringGreen,
    },
    cancelButton: {
        backgroundColor: colors.redColor
    }
})


export default styles;