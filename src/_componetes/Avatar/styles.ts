import { Dimensions, StyleSheet } from "react-native";

const { height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    imagemUsuario: {
        width: 32,
        height: 32,
        borderRadius: 100
    },
    bordaImagem: {
        width: 95,
        height: 95,
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center"
    },
    imagemUsuarioComBorda: {
        width: 88,
        height: 88,
        borderRadius: 100
    },

})

export default styles