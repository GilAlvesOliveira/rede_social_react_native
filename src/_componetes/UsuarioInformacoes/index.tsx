import { Text, Touchable, TouchableOpacity, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "../../../app.json"
import Avatar from "../Avatar"
import { IUsuario, IUsuarioData } from "../../_services/UserService/types"
import styles from "./styles"

const UsuarioInformacoes = (props: {perfil: IUsuarioData, usuarioLogado: IUsuario}) => {
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
                        <Text style={styles.textNumero}>{props.perfil.seguidores}</Text>
                        <Text style={styles.placeHolder}>Seguidores</Text>
                    </View>
                    <View style={styles.containerInfo}>
                        <Text style={styles.textNumero}>{props.perfil.seguindo}</Text>
                        <Text style={styles.placeHolder}>Seguindo</Text>
                    </View>
                </View>
                <View style={[styles.containerInfo, {marginTop: 16}]}>
                    {props.perfil.id == props.usuarioLogado.id ?
                    <TouchableOpacity style={styles.botaoContorno}>
                        <Text style={styles.textBotaoContorno}>Editar Usuario</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity>
                        <Text>{props.perfil.segueEsseusuario?"Deixar deseguir" : "Seguir"}</Text>
                    </TouchableOpacity>
                    }
                </View>
            </View>
        </View>
    )
}

export default UsuarioInformacoes