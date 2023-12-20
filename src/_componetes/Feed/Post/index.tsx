import { Image, Text, TouchableOpacity, View } from "react-native";
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
        await FeedService.alternarCurtida(props.post.id)
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
                <Avatar imagem={props.post.usuario.avatar} />
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

                <Text style={styles.textCurtida}>Curtido por <Text style={[styles.textCurtida, styles.textCurtidaNegrito]}></Text>{props.post.likes.length} pessoas.</Text>
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
            <Comentario usuarioLogado={usuarioLogado} comentarioInputAtivo={comentarioInputAtivo} comentario={props.post.comentarios}/>
            }
        </View>
    )
}

export default Post