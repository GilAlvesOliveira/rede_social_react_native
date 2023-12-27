import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Container from '../../_componetes/Container';
import Feed from '../../_componetes/Feed';
import { RootStackParamList } from '../../_rotas/RootStackParams';
import * as UsuarioService from '../../_services/UserService'
import { useEffect, useState } from 'react';
import { IUsuario, IUsuarioData } from '../../_services/UserService/types';
import { Alert, View } from 'react-native';
import UsuarioInformacoes from '../../_componetes/UsuarioInformacoes';

const Perfil = () => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Perfil'>
    const navigation = useNavigation<navigationTypes>()
    const perfilParametro = navigation.getState().routes.find(route => route.name == 'Perfil')?.params

    const [usuarioLogado, setUsuarioLogado] = useState<IUsuario>()
    const [perfil, setPerfil] = useState<IUsuarioData>()

    useEffect(() => {
        getPerfil()
    }, [])

    const getPerfil = async () => {
        try{
            const usuario = await UsuarioService.getUsuarioAtual()
            setUsuarioLogado(usuario)
            let perfil 
            if(perfilParametro && perfilParametro.id) {
                 perfil = await UsuarioService.getPerfil(perfilParametro.id)  
            } else if( usuario && usuario.id) {
                perfil = await UsuarioService.getPerfil(usuario.id)
            }

            if (perfil) {
                const perfilFormatado: IUsuarioData = {
                    id: perfil.data._id,
                    nome: perfil.data.nome,
                    email: perfil.data.email,
                    avatar: perfil.data.avatar,
                    seguidores: perfil.data.seguidores,
                    seguindo: perfil.data.seguindo,
                    publicacoes: perfil.data.publicacoes,
                    segueEsseUsuario: perfil.data.segueEsseUsuario != undefined ? perfil.data.segueEsseUsuario : false
                }
                setPerfil(perfilFormatado)
            }

        } catch(erro: any) {
            Alert.alert("Erro", "Erro ao carregar dados do perfil")
            console.log("erro", erro)
        }
    }
    return (
        <Container
            headerProps={{ perfilHeader : {
                usuarioNome: perfil?.nome || '',
                perfilExterno: usuarioLogado?.id == perfil?.id ? false : true
            }}}
            footerProps={{ guiaAtual: usuarioLogado?.id == perfil?.id ? 'Perfil' : 'Home'}}
        >
            <View>
                {perfil && usuarioLogado &&
                <UsuarioInformacoes usuarioLogado={usuarioLogado} perfil={perfil}/>
                }
                <Feed feedPerfil={true} perfil={perfil} />
            </View>
        </Container>
    )
}

export default Perfil