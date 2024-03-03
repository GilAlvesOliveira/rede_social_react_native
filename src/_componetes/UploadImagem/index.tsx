import { Image, TouchableOpacity, View} from "react-native";
import * as selecionarImagem from 'expo-image-picker';
import styles from "./styles";


const UploadImagem = (props: {
    setImagem: (imagem: any) => void, // Altere o tipo esperado para 'any' ou outro tipo apropriado
    imagem: any
}) => {

    const escolherImagem = async () => {
        const resultado = await selecionarImagem.launchImageLibraryAsync({
            mediaTypes: selecionarImagem.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1
        })
        if (!resultado.canceled) {
            const selectedImage = resultado.assets[0]; // Acessar o primeiro ativo selecionado
            const imagemParaSalvar = { uri: selectedImage.uri }; // Criar um novo objeto com a chave 'uri'
            props.setImagem(imagemParaSalvar); // Passar o novo objeto para setImagem
        }
    }

    return (
        <View>
            <TouchableOpacity style={styles.containerAvatar} onPress={escolherImagem}>
                {props.imagem ?
                    <Image style={styles.imagem} source={{ uri: props.imagem.uri }}></Image>
                    :
                    <Image source={require('../../_assets/imagens/Avatar_Foto.png')}></Image>
                }
            </TouchableOpacity>
        </View>
    )
}

export default UploadImagem;
