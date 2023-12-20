import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
import { IPost } from "./types";
import styles from "./styles";
import { useEffect, useState } from "react";
import { getUsuarioAtual } from "../../../_services/UserService";
import { IUsuario } from "../../../_services/UserService/types";
import Comentario from "../Comentarios";
import Avatar from "../../Avatar";
import * as FeedService from '../../../_services/FeedService'


const Post = (props: {post: IPost}) => {
    const [curtido, setCurtido] = useState<boolean>(false)
    const [curtidas, setCurtidas] = useState<number>(props.post.likes.length)
    const [comentado, setComentado] = useState<boolean>(false)
    const [comentarioInputAtivo, setComentarioInputAtivo] = useState<boolean>(false)
    const [numeroDeLinhas, setNumeroDeLinhas] = useState<number | undefined>(2)
    const [usuarioLogado, setUsuarioLogado] = useState<IUsuario>()

    useEffect(() => {
        verificarCurtida()
        verificarComentario()
    }, [])

    const AlternarCurtida = async () => {
        setCurtido(!curtido)
        try {
            await FeedService.alternarCurtida(props.post.id)
            if(curtido) {
                setCurtidas(curtidas - 1)
            } else {
                setCurtidas(curtidas + 1)
            }
        } catch (erro: any) {
            console.log(erro)
            Alert.alert("Erro", "Erro ao efetuar a curtida")
        }
    }

    const verificarCurtida = async () => {
        const user = await getUsuarioAtual()
        setUsuarioLogado(user)
        if (user.id) {
            setCurtido(props.post.likes.includes(user.id))
        }
    }
    const verificarComentario = async () => {
        const user = await getUsuarioAtual()
        setUsuarioLogado(user)
        if (user.id) {
            setComentado(props.post.comentarios.find(menssagem => menssagem.usuarioId == user.id) ? true : false)
        }
    }


    return (
        <View style={styles.container}>
            <View style={styles.containerUsuario}>
                <Avatar usuario={props.post.usuario} />
                <Text style={styles.textUsuarioNome} >{props.post.usuario.nome}</Text>
            </View>
            <View>
                <Image style={styles.postImagem} source={{uri: props.post.imagem}} />
            </View>

            <View style={styles.containerCurtidoEComentario}>
                <TouchableOpacity onPress={() => AlternarCurtida()}>
                    <Image 
                    style={styles.icone}
                    source={curtido ? require('../../../_assets/imagens/curtido.png')
                    : require('../../../_assets/imagens/naoCurtido.png')} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => setComentarioInputAtivo(!comentarioInputAtivo)} >
                    <Image
                    style={styles.icone}
                    source={comentado || comentarioInputAtivo?
                        require('../../../_assets/imagens/comentado.png')
                        : require('../../../_assets/imagens/naoComentado.png')} />
                </TouchableOpacity>

                <Text style={styles.textCurtida}>Curtido por <Text style={[styles.textCurtida, styles.textCurtidaNegrito]}></Text>{curtidas} pessoas.</Text>
            </View>

            <View style={styles.containerDescricao}>
                    <Text numberOfLines={numeroDeLinhas} style={styles.textDescricao} >
                        <Text style={styles.textUsuarioNome}>
                        {props.post.usuario.nome}
                        </Text>
                        {'  ' + props.post.descricao} 
                    </Text>
                    {props.post.descricao.length > 90 &&
                    <TouchableOpacity style={styles.containerMaisMenos} onPress={() => setNumeroDeLinhas(numeroDeLinhas ? undefined : 2)} >
                        <Text style={styles.textMaisMenos} >
                            {!numeroDeLinhas ? 'menos' : 'mais'}
                        </Text>
                    </TouchableOpacity>
                    }
            </View>
            {
                usuarioLogado && 
            <Comentario idPost={props.post.id} usuarioLogado={usuarioLogado} comentarioInputAtivo={comentarioInputAtivo} comentarios={props.post.comentarios}/>
            }
        </View>
    )
}

export default Post