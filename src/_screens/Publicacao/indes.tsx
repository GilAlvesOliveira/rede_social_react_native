import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native"
import Container from "../../_componetes/Container"
import { useEffect, useState } from "react"
import * as selecionarImagem from 'expo-image-picker';
import styles from "./styles";
import * as FeedService from '../../_services/FeedService'
import { NativeStackNavigationProp} from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_rotas/RootStackParams";
import { useNavigation } from "@react-navigation/native";

const Publicacao = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Publicacao'>
    const navigation = useNavigation<navigationTypes>()

    const [descricao, setDescricao] = useState<string>('')
    const [ imagem, setImagem] = useState<any>()

    useEffect(() => {
        escolherImagem()
    }, [])

    const escolherImagem =async () => {
        const resultado = await selecionarImagem.launchImageLibraryAsync({    /*launchCameraAsync abre a camera*/
            mediaTypes: selecionarImagem.MediaTypeOptions.Images,       /*mediatype seria o tipo do arquivo, imagem ou video*/
            allowsEditing: true,                                        /*aqui seria para editar a imagem depois*/
            aspect: [4, 3],
            quality: 1
        })
        if(!resultado.canceled){
            setImagem(resultado)
        }
    }

    const enviar = async () => {
        if(imagem || descricao) {
            try{
                const body = new FormData()
                if(imagem){
                    const file: any = {
                        uri: imagem.uri,
                        type: `image/${imagem.uri.split('/').pop().split('.').pop()}`,
                        nome: imagem.uri.split('/').pop()
                    }
                    body.append('file', file)
                    await FeedService.enviarPublicacao(body)
                    navigation.navigate('Home')
                }
                if(descricao){
                    body.append("descricao", descricao)
                }
            }catch(erro: any){
                console.log('teste',erro)
                Alert.alert("Erro", "Erro ao enviar publicacao")
            }
        }
    }

    return (
        <Container 
            footerProps={{guiaAtual: "Publicacao"}}
            headerProps={{publicacaoHeader: {
                submit: enviar,
                submiHabilitar: imagem || descricao
            }}}
            >
            <View style={styles.conatiner}>
                <TouchableOpacity onPress={() => escolherImagem()} style={styles.containerImagem}>
                    <Image style={imagem? styles.imagem : styles.imagemPadrao} source={imagem ? {uri: imagem.uri} : require('../../_assets/imagens/Camera.png')} />
                </TouchableOpacity>

                <TextInput
                    placeholder="Escreva uma legenda..."
                    multiline={true}
                   onChangeText={value => setDescricao(value)}
                   value={descricao}
                   autoCapitalize="none"
                   style={styles.descricao}
                />
            </View>
        </Container>
    )
}

export default Publicacao