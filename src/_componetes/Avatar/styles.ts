import { Dimensions, StyleSheet } from "react-native";

const { height, width} = Dimensions.get('screen')

const styles = StyleSheet.create({
    imagemUsuario: {
        width: 32,
        height: 32,
        borderRadius: 100
    }
})

export default styles