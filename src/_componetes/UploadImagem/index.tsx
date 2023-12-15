import { Image, TouchableOpacity, View} from "react-native";
import * as selecionarImagem from 'expo-image-picker';
import styles from "./styles";

const UploadImagem = (props: {
    setImagem: (imagem: selecionarImagem.ImagePickerResult) => void,
    imagem: any
}) => {

    const escolherImagem =async () => {
        const resultado = await selecionarImagem.launchImageLibraryAsync({    /*launchCameraAsync abre a camera*/
            mediaTypes: selecionarImagem.MediaTypeOptions.Images,       /*mediatype seria o tipo do arquivo, imagem ou video*/
            allowsEditing: true,                                        /*aqui seria para editar a imagem depois*/
            aspect: [4, 3],
            quality: 1
        })
        if(!resultado.canceled){
            props.setImagem(resultado)
        }
    }

    return (                /*se tiver quebra de linha, tem que ter o () */
        <View>                 
            <TouchableOpacity style={styles.containerAvatar} onPress={escolherImagem}> 
                {props.imagem ? 
                <Image style={styles.imagem} source={{uri: props.imagem.uri}}></Image>
                :
                <Image source={require('../../_assets/imagens/Avatar_Foto.png')}></Image>
                }
            </TouchableOpacity>                
        </View>
    )/*sgv tem que instalar uma dependencia e fazer outro coldigo para usar, por isso usamos a imagem png*/
}

export default UploadImagem