import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles";


const Avatar = (props: {imagem: string | null}) => {
    return (
            <TouchableOpacity>
                <Image 
                    style={styles.imagemUsuario}
                    source={props.imagem ? 
                        {uri: props.imagem}
                        : require('../../_assets/imagens/Avatar.png')}/>
            </TouchableOpacity>
    )
}

export default Avatar