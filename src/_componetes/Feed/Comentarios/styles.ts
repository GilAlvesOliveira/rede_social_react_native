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
        fontFamily: 'biennale',
        fontSize: 12,
    },
    textomentario:{
        fontSize:12
    }
})

export default styles