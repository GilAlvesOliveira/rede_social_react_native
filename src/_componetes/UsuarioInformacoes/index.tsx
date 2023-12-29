import { Alert, Text, Touchable, TouchableOpacity, View } from "react-native"
import Avatar from "../Avatar"
import { IUsuario, IUsuarioData } from "../../_services/UserService/types"
import styles from "./styles"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../_rotas/RootStackParams"
import { useNavigation } from "@react-navigation/native"
import * as UserService from "../../_services/UserService"
import { useState } from "react"

const UsuarioInformacoes = (props: {perfil: IUsuarioData, usuarioLogado: IUsuario}) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Perfil'>
    const navigation = useNavigation<navigationTypes>()

    const [seguidores, setSeguidores] = useState<number>(props.perfil.seguidores)
    const [segueEsseUsuario, setSegueEsseUsuario] = useState<boolean>(props.perfil.segueEsseUsuario)

    const alternarSeguir = async () => {
        try{
            if(segueEsseUsuario) {
                setSeguidores(seguidores -1)
            }else{
                setSeguidores(seguidores +1)
            }
            await UserService.alternarSeguir(props.perfil.id)
            setSegueEsseUsuario(!segueEsseUsuario)
        }catch(erro: any) {
            Alert.alert("Erro", "Erro ao efetuar a operacao")
            console.log(erro)
        }
    }

    return (
        <View style={styles.container}>
            <Avatar imagemComBorda={true} usuario={props.perfil}/>
            <View>
                <View style={styles.containerNoPerfil}>
                    <View style={styles.containerInfo}>
                        <Text style={styles.textNumero}>{props.perfil.publicacoes}</Text>
                        <Text style={styles.placeHolder}>Publicações</Text>
                    </View>
                    <View style={[styles.containerInfo, {marginHorizontal: 10}]}>
                        <Text style={styles.textNumero}>{seguidores}</Text>
                        <Text style={styles.placeHolder}>Seguidores</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={styles.textNumero}>{props.perfil.seguindo}</Text>
                        <Text style={styles.placeHolder}>Seguindo</Text>
                    </View>
                </View>
                <View style={[styles.containerInfo, {marginTop: 16}]}>
                    {props.perfil.id == props.usuarioLogado.id ?
                    <TouchableOpacity style={styles.botaoContorno} onPress={() => navigation.navigate('EditarPerfil', props.perfil)}>
                        <Text style={styles.textBotaoContorno}>Editar Usuario</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity onPress={() => alternarSeguir()} style={segueEsseUsuario ?  styles.botaoContorno : styles.botao}>
                        <Text style={segueEsseUsuario ? styles.textBotaoContorno : styles.textBotao}>{segueEsseUsuario ? "Deixar de seguir" : "Seguir"}</Text>
                    </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}

export default UsuarioInformacoes