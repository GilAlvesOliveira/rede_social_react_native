import { Text, View } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { colors } from "../../../app.json"
import Avatar from "../Avatar"
import { IUsuario, IUsuarioData } from "../../_services/UserService/types"

const UsuarioInformacoes = (props: {perfil: IUsuarioData}) => {
    return (
        <View>
            <Avatar imagemComBorda={true} usuario={props.perfil}/>
            <View>
                <View>
                    <View>
                        <Text>{props.perfil.publicacoes}</Text>
                        <Text>Publicações</Text>
                    </View>
                    <View>
                        <Text>{props.perfil.seguidores}</Text>
                        <Text>Seguidores</Text>
                    </View>
                    <View>
                        <Text>{props.perfil.seguindo}</Text>
                        <Text>Seguindo</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default UsuarioInformacoes