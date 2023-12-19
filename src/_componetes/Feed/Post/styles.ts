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
        marginLeft: 12
    },
    textMaisMenos: {
        color: colors.greenWaterColor
    }
})


export default styles;