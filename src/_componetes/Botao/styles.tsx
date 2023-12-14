/*aqui seria o estilo do componente botao*/

import{ Dimensions, StyleSheet} from "react-native";
import { colors } from "../../../app.json"

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    containerBotao: {
        marginTop: height/20
    },
    botao: {
        width: width/1.3,
        height: height/15,
        backgroundColor: colors.primaryColor,
        borderRadius: 8,
        alignItems: 'center',    /*para deixar texto centralizado*/
        justifyContent: "center" /*para deixar texto centralizado*/
    },
    text: {
        color: colors.whiteColor,
        fontFamily: "biennale-bold",
        fontWeight: "600",
        fontSize: 16
    },
    botaoDesabilitado: {
        backgroundColor: colors.grayColor03
    }
})

export default styles