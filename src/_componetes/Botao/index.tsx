/*pagina dedicada para o componente botao*/

import { Text, TouchableOpacity, ActivityIndicator, View } from "react-native"
import { IBotao } from "./types"
import { colors } from "../../../app.json"
import styles from "./styles"

const Botao = (props: IBotao) => {  /*melhor maneira de fazer um botao seria o TouchableOpacity */
    return (
        <View style={styles.containerBotao}>
            <TouchableOpacity
                onPress={props.onPress}
                disabled= {props.disabled}
                style={props.disabled ? [styles.botao, props.style, styles.botaoDesabilitado] : [styles.botao, props.style]}
            >
                {props.loading ?
                    <ActivityIndicator size={30} color={colors.whiteColor} />  /*ActivityIndicator se usa para mostrar o loading */
                    :
                    <Text style={styles.text}>{props.placeholder}</Text>
                }
            </TouchableOpacity>
        </View>
    )
}

export default Botao