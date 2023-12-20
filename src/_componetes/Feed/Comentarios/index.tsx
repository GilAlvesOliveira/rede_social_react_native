import { Image, Text, TextInput, View } from "react-native"
import { IComentario } from "./types";
import styles from "./styles";
import Avatar from "../../Avatar";
import { IUsuario } from "../../../_services/UserService/types";
import { useState } from "react";

const Comentario = (props: {comentario: IComentario[], comentarioInputAtivo: boolean, usuarioLogado: IUsuario}) => {
    const [comentario, setComentario] = useState<string>('')

    const onComentario = async () => {

    }
    
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

                {props.comentarioInputAtivo && 
                    <View style={styles.containerInputComentario}>
                        <Avatar imagem={props.usuarioLogado.avatar}/>

                        <TextInput 
                            placeholder="Adicione um comentario"
                            value={comentario}
                            style={styles.inputComentario}
                            onChangeText={value => setComentario(value)}
                            onSubmitEditing={onComentario}
                            autoCapitalize="none"
                        />
                    </View>
                }
            </View>
        </View>
    )
}

export default Comentario;