import { Alert, FlatList, View } from "react-native";
import { IUsuarioData } from "../../_services/UserService/types";
import { useEffect, useState } from "react";
import * as FeedService from '../../_services/FeedService'
import { IPost } from "./Post/types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_rotas/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import Post from './Post';
import { colors } from '../../../app.json'
import { ActivityIndicator } from "react-native";

const Feed = (props: {feedPerfil?: boolean, perfil?: IUsuarioData}) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    const[estaCarregando, setEstaCarregando] = useState<boolean>(false)
    const[posts, setPosts] = useState<IPost[]>([])


    useEffect(() => {
        loadPosts()
        navigation.addListener('focus', () => {
            loadPosts()
        })
    }, [props])

    const loadPosts = async () => {
        if((props.feedPerfil && props.perfil?.id) || !props.feedPerfil) {
            try{
                setEstaCarregando(true)
                const {data} = await FeedService.getPosts(props?.perfil?.id)
                const postsFormatado: IPost[] = data.map((post: any) => {
                    const postsFormatado: IPost = {
                        id: post._id,
                        imagem: post.foto,
                        descricao: post.descricao,
                        usuario: {
                            nome: post?.usuario?.nome || props.perfil?.nome,
                            avatar: post?.usuario?.avatar || post.ussuario.avatar,
                            id: post.usuario.idUsuario,
                            email: '',
                            token: '',
                        },
                        comentarios: post.comentarios.map((c: any) => {
                            return {
                                nome: c.nome,
                                menssagem: c.comentario,
                                usuarioId: c.usuarioId
                            }
                        }),
                        likes: post.likes
                    }
                    return postsFormatado
                })
                setPosts(postsFormatado)
                setEstaCarregando(false)
            }catch(erro: any) {
                setEstaCarregando(false)
                console.log(erro)
                Alert.alert("Erro", "Erro ao carregar os dados do feed.")
            }
        }
    }
        
    return (
        <View>
            <FlatList 
                data={posts}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (<Post post={item}/>)}
                ListFooterComponent={() => (
                    estaCarregando ?
                        <View>
                            <ActivityIndicator size={30} color={colors.primaryColor} />
                        </View>
                        :
                        null 
                )}
            />
        </View>
    )
}

export default Feed