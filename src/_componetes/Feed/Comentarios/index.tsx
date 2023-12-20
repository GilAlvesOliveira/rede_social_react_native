import { Alert, Image, Text, TextInput, View } from "react-native"
import { IComentario, IComentarioComponente } from "./types";
import styles from "./styles";
import Avatar from "../../Avatar";
import { IUsuario } from "../../../_services/UserService/types";
import { useState } from "react";
import * as FeedService from '../../../_services/FeedService';

const Comentario = (props: IComentarioComponente) => {
    const [comentario, setComentario] = useState<string>('')
    const [comentarios, setComentarios] = useState<IComentario[]>(props.comentarios)

    const onComentario = async () => {
        try {
            if(props.usuarioLogado && props.usuarioLogado.nome && props.usuarioLogado.id) {
                await FeedService.enviarComentario(props.idPost, comentario)
                const comentarioLista = comentarios
                comentarioLista.push({
                    menssagem: comentario,
                    nome: props.usuarioLogado.nome,
                    usuarioId: props.usuarioLogado.id
                })
                setComentarios(comentarioLista)
                setComentario('')
            }

        }catch(erro: any) {
            console.log(erro)
            Alert.alert("Erro", "Erro ao enviar o comentario.")
        }
    }
    
    return (
        <View>
            <View style={styles.containerComentario}>
                {props.comentarios?.length > 0 && props.comentarios.map((comentario: IComentario, index: number) => (
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
                        <Avatar usuario={props.usuarioLogado}/>

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