import { Dimensions, StyleSheet } from "react-native";
import { colors } from '../../../app.json';

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    conatiner: {
        width: width,
        height: height/8,
        borderBottomWidth: 0.5,
        borderBottomColor: colors.grayColor01,
        flexDirection: 'row',
        marginHorizontal: 16,
        marginVertical: 16
    },
    containerImagem: {
        marginRight: 16
    },
    imagem: {
        width: 80,
        height: 80
    },
    imagemPadrao: {
        backgroundColor: colors.primaryColor,
        width: 80,
        height: 80
    },
    descricao: {
        fontFamily: 'biennale',
        fontWeight:'400',
        fontSize: 12,
        color: colors.grayColor02,
        width: width/2,
        height: height/30,
        paddingHorizontal: 5,
        bottom: 7
    }
})

export default styles;