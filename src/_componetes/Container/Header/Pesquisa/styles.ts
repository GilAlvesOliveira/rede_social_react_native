import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../../../app.json';

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    conatiner: {
        zIndex: 9, /*esta propriedade que faz a busca se sobrepor as outras coisas*/
        position: 'absolute',
        top: 90,
        backgroundColor: colors.whiteColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundImpar: {
        width: width,
        height: 50,
        backgroundColor: colors.whiteColor
    },
    backgroundPar: {
        width: width,
        height: 50,
        backgroundColor: colors.grayColor00
    },
    imagemUsuario: {
        width: 32,
        height: 32,
        borderRadius: 10
    },
    nome: {
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'biennale-bold',
        lineHeight: 12
    },
    email: {
        marginLeft: 8,
        fontSize: 12,
        fontFamily: 'biennale',
        lineHeight: 12
    },
    row : {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12,
        marginVertical: 10
    }
})

export default styles