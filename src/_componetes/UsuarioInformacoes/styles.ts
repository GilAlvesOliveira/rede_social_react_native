import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../app.json"
import { Colors } from "react-native/Libraries/NewAppScreen";

const {height, width} = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 12,
        marginTop: 24
    },
    containerNoPerfil: {
        flexDirection: "row",
        marginHorizontal: 24
    },
    containerInfo: {
        alignItems: 'center'
    },
     textNumero: {
        fontSize: 14,
        color: colors.grayColor04,
        fontFamily: "biennale-bold"
     },
     placeHolder: {
        font: 12,
        color: Colors.grayColor04,
        fontFamily: "biennale"
     },
     botaoContorno: {
        width: 216,
        height: 28,
        backgroundColor: colors.whiteColor,
        borderWidth: 1,
        borderColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
     },
     textBotaoContorno: {
        fontSize: 12,
        color: colors.primaryColor,
        fontFamily: 'biennale',
     },
     botao: {
        width: 216,
        height: 28,
        backgroundColor: colors.primaryColor,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4
     },
     textBotao: {
        fontSize: 12,
        color: colors.whiteColor,
        fontFamily: 'biennale'
     }
})

export default styles