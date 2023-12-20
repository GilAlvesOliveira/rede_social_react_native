import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../_rotas/RootStackParams";
import { IUsuario, IUsuarioData } from "../../_services/UserService/types";
import styles from "./styles";


const Avatar = (props: {usuario: IUsuarioData | IUsuario}) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()

    return (
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