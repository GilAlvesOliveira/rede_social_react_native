import { Dimensions, StyleSheet } from "react-native";

const {height} = Dimensions.get('screen')

const styles = StyleSheet.create({
    containerAvatar: {
        marginBottom: height/35
    },
    imagem: {
        width: 150,
        height: 150,
        borderRadius: 100
    }
})

export default styles