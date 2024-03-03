import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../../_componetes/Container";
import Avatar from "../../_componetes/Avatar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_rotas/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import styles from "./styles";
import * as selecionarImagem from 'expo-image-picker';
import * as UsuarioService from '../../_services/UserService'

const EditarPerfil = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Perfil'>
    const navigation = useNavigation<navigationTypes>()
    const perfil = navigation.getState().routes.find(route => route.name == "EditarPerfil")?.params

    const [nome, setNome] = useState<string>('')
    const [temNome, setTemNome] = useState<boolean>(false)
    const [imagem, setImagem] = useState<any>()

    const escolherImagem = async () => {
        const resultado = await selecionarImagem.launchImageLibraryAsync({
            mediaTypes: selecionarImagem.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        });
    
        if (!resultado.canceled) {
            const selectedImage = resultado.assets[0]; // Acessar o primeiro ativo selecionado
            setImagem(selectedImage);
            console.log('Resultado', selectedImage);
        }
    }

    const editarPerfil = async () => {
        if(imagem || nome) {
            try{
                const body = new FormData()
                if(imagem){
                    const file: any = {
                        uri: imagem.uri,
                        type: `imagem/${imagem.uri.split('/').pop().split('.').pop()}`,
                        nome: imagem.uri.split('/').pop()
                    }
                    body.append('file', file)
                }
                if(nome){
                    body.append("nome", nome)
                }
                await UsuarioService.update(body)
                navigation.goBack()
            }catch(erro: any){
                console.log('teste',erro)
                Alert.alert("Erro", "Erro ao alterar as informações do usuario")
            }
        }
    }

    return (
        <Container 
            headerProps={{ editarPerfilHeader: {
                submit: editarPerfil,
                submiHabilitar: imagem || nome
            }}}
            footerProps={{ guiaAtual: "Perfil"}}    
        >
            <View>
                {
                    perfil && 
                    <View>
                        <View style={styles.containerImagem}>
                            <Avatar usuario={perfil} imagem={imagem} imagemComBorda={true}/>
                            <TouchableOpacity onPress={() => escolherImagem()}>
                                <Text style={styles.textUpdateImage}>Alterar foto de perfil </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <View style={styles.containerEditName}>
                                <View style={styles.containerRowEditName}>
                                    <Text style={styles.textName}>Nome: </Text>
                                    {!temNome ? (
                                        <Text style={styles.textNameUser}>{perfil.nome}</Text>
                                    ) : (
                                        <TextInput
                                            placeholder="Digite um nome"
                                            style={styles.input}
                                            value={nome}
                                            onChangeText={(n) => setNome(n)}
                                            autoCapitalize={'none'}
                                        />
                                    )}

                                    <TouchableOpacity style={styles.buttomDelete} onPress={() => setTemNome(!temNome)} >
                                        <Image source={require('../../_assets/imagens/xCirculo.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                }
            </View>
        </Container>
    )
}

export default EditarPerfil