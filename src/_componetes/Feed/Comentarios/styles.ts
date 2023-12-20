import { Dimensions, StyleSheet } from "react-native";
import { colors } from "../../../../app.json";

const {width, height} = Dimensions.get("screen")

const styles =  StyleSheet.create({
    containerComentario: {
        marginHorizontal: 16,
        marginTop: 5,
    },
    comentario: {
        marginTop: 8
    },
    textNome:{
        fontFamily: 'biennale-bold',
        fontSize: 12,
    },
    textomentario:{
        fontSize:12
    },
    containerInputComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    inputComentario: {
        color: colors.grayColor02,
        width: width/1.6,
        height: height/22,
        paddingHorizontal: 8,
        fontFamily: 'biennale-bold',
        fontSize: 12
    }
})

export default styles