import { Image, Text, TouchableOpacity, View } from "react-native";
import { IPost } from "./types";
import styles from "./styles";
import { useEffect, useState } from "react";
import { getUsuarioAtual } from "../../../_services/UserService";
import { IUsuario } from "../../../_services/UserService/types";

const Post = (props: {post: IPost}) => {
    const [curtido, setCurtido] = useState<boolean>(false)
    const [comentado, setComentado] = useState<boolean>(false)
    const [numeroDeLinhas, setNumeroDeLinhas] = useState<number | undefined>(2)
    const [usuarioLogado, setUsuarioLogado] = useState<IUsuario>()

    useEffect(() => {
        verificarCurtida()
    }, [])

    const AlternarCurtida = async () => {
        setCurtido(!curtido)
    }

    const verificarCurtida = async () => {
        const user = await getUsuarioAtual()
        setUsuarioLogado(user)
        if (user.id) {
            setCurtido(props.post.likes.includes(user.id))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerUsuario}>
                <TouchableOpacity >
                    <Image
                    style={styles.imagemUsuario}
                    source={props.post.usuario.avatar ? 
                    {uri: props.post.usuario.avatar} : 
                    require('../../../_assets/imagens/Avatar.png')} />
                </TouchableOpacity>
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

                <TouchableOpacity>
                    <Image
                    style={styles.icone}
                    source={comentado ? require('../../../_assets/imagens/comentado.png')
                    : require('../../../_assets/imagens/naoComentado.png')} />
                </TouchableOpacity>

                <Text style={styles.textCurtida}>Curtido por <Text style={[styles.textCurtida, styles.textCurtidaNegrito]}></Text>{props.post.likes.length} pessoas.</Text>
            </View>

            <View style={styles.containerDescricao}>
                <View>
                    <Text numberOfLines={numeroDeLinhas} style={styles.textDescricao} >
                        <Text style={styles.textUsuarioNome}>
                        {props.post.usuario.nome}
                        </Text>
                        {props.post.descricao} 
                    </Text>
                    <TouchableOpacity onPress={() => setNumeroDeLinhas(numeroDeLinhas ? undefined : 2)} >
                        <Text style={styles.textMaisMenos} >
                            {!numeroDeLinhas ? 'menos' : 'mais'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Post