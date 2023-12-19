import { Text, View } from "react-native"
import { IComentario } from "./types";
import styles from "./styles";

const Comentario = (props: {comentario: IComentario[]}) => {
    return (
        <View>
            <View style={styles.containerComentario}>
                {props.comentario?.length > 0 && props.comentario.map((comentario: IComentario, index: number) => (
                    <View key={index} style={ styles.comentario}>
                        <Text style={styles.textomentario}>
                            <Text style={styles.textNome}>
                            {comentario.nome}
                            </Text>
                                {' ' + comentario.menssagem}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    )
}

export default Comentario;