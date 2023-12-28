import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import Container from "../../_componetes/Container";
import Avatar from "../../_componetes/Avatar";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../_rotas/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import styles from "./styles";
import * as selecionarImagem from 'expo-image-picker';


const EditarPerfil = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Perfil'>
    const navigation = useNavigation<navigationTypes>()
    const perfil = navigation.getState().routes.find(route => route.name == "EditarPerfil")?.params

    const [nome, setNome] = useState<string>('')
    const [temNome, setTemNome] = useState<boolean>(true)
    const [imagem, setImagem] = useState<any>()

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

    return (
        <Container 
            headerProps={{ editarPerfilHeader: {
                submit: () => {}
            }}}
            footerProps={{ guiaAtual: "Perfil"}}    
        >
            <View>
                {
                    perfil && 
                        <View style={styles.containerImagem}>
                            <Avatar usuario={perfil} imagemComBorda={true}/>
                            <TouchableOpacity onPress={() => escolherImagem()}>
                                <Text style={styles.textUpdateImage}>Alterar foto de perfil </Text>
                            </TouchableOpacity>
                        <View>

                            <View style={styles.containerEditName}>
                                <View style={styles.containerRowEditName}>
                                    <Text style={styles.textName}>Nome </Text>
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