import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../_rotas/RootStackParams";
import { IUsuario, IUsuarioData } from "../../_services/UserService/types";
import styles from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../../../app.json"

const Avatar = (props: {imagemComBorda?: boolean, usuario: IUsuarioData | IUsuario, imagem?: any}) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    return (
        props.imagemComBorda ?
            <LinearGradient
                style={styles.bordaImagem}
                colors={[colors.primaryColor, colors.greenWaterColor]}
                >
                <Image 
                    style={styles.imagemUsuarioComBorda}
                    source={props.imagem? 
                        {uri: props.imagem.uri}
                        :
                        props.usuario.avatar ?
                        {uri: props.usuario.avatar}
                        : require('../../_assets/imagens/Avatar.png')} />
            </LinearGradient>
            :
            <TouchableOpacity onPress={() => {navigation.navigate("Perfil", props.usuario)}} >
                <Image 
                    style={styles.imagemUsuario}
                    source={props.usuario.avatar ? 
                        {uri: props.usuario.avatar}
                        : require('../../_assets/imagens/Avatar.png')}/>
            </TouchableOpacity>
    )
}

export default Avatar