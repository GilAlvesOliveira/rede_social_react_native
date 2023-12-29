import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { IHeader } from "./types";
import styles from "./styles";
import { colors } from '../../../../app.json';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../_rotas/RootStackParams";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


const Header = (props: IHeader) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    const logout = async () => {
        await AsyncStorage.removeItem('token')
        navigation.navigate('Login')
    }

   return (
    <View style={styles.container}>
        {
            props.default && (
                <View style={styles.row}>
                    <View>
                        <Image style={styles.imagem} source={require('../../../_assets/imagens/LogoHeader.png')} />
                    </View>

                    <View style={props?.barraPesquisa?.value.length == 0 ? styles.containerInputPesquisa : [styles.containerInputPesquisa, {borderColor: colors.primaryColor, borderWidth: 1}]}>
                        <Image style={styles.imagem} source={require('../../../_assets/imagens/lupa.png')} />

                        <TextInput 
                            placeholder="Pesquisar"
                            style={props?.barraPesquisa?.value.length == 0 ? styles.input : styles.inputAtivo}
                            onChangeText={props?.barraPesquisa?.onChange}
                            autoCapitalize={'none'}
                        />
                    </View>
                </View>
            )
        }

        {
            props.perfilHeader && 
            <View style={styles.containerPerfil}>
                <View style={{marginHorizontal: 16}} >
                    {props.perfilHeader.perfilExterno && 
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Image style={{alignItems: 'flex-start'}} source={require('../../../_assets/imagens/setaVoltar.png')} />
                        </TouchableOpacity>
                    }
                </View>

                <Text style={styles.textNome} >{props.perfilHeader.usuarioNome}</Text>
                
                <View style={{marginHorizontal: 16}} >
                    {!props.perfilHeader.perfilExterno && 
                        <TouchableOpacity onPress={() => logout()} >
                            <Image source={require('../../../_assets/imagens/log-out.png')} />
                        </TouchableOpacity>
                    }
                </View>
            </View>
        }

        {
            props.editarPerfilHeader && 
            <View style={styles.containerPerfil} >
                <View style={{marginHorizontal: 18}} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Text style={styles.textCancelar} > Cancelar </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textNome} >Editar Perfil </Text>
                <View>
                    <TouchableOpacity onPress={() => props.editarPerfilHeader?.submiHabilitar && props.editarPerfilHeader?.submit()} >
                        <Text style={props.editarPerfilHeader.submiHabilitar ? styles.textConcluir : styles.textConcluirDesabilitado} >Concluir </Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
        {
            props.publicacaoHeader && 
            <View style={styles.containerPerfil} >
                <View style={{marginHorizontal: 18}} >
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Text style={styles.textCancelar} > Cancelar </Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textNome} >Nova Publicação </Text>
                <View>
                    <TouchableOpacity onPress={() => props.editarPerfilHeader?.submiHabilitar && props.editarPerfilHeader?.submit()} >
                        <Text style={props.publicacaoHeader.submiHabilitar ? styles.textConcluir : styles.textConcluirDesabilitado} >Compartilhar </Text>
                    </TouchableOpacity>
                </View>
            </View>
        }
    </View>
   ) 
}

export default Header