import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";
import { IHeader } from "./types";
import styles from "./styles";
import { colors } from '../../../../app.json';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../_rotas/RootStackParams";
import { useNavigation } from "@react-navigation/native";


const Header = (props: IHeader) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Home'>
    const navigation = useNavigation<navigationTypes>()
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
            <View style={styles.row}>
                {props.perfilHeader.perfilExterno && 
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={require('../../../_assets/imagens/setaVoltar.png')} />
                    </TouchableOpacity>
                }

                <Text>{props.perfilHeader.usuarioNome}</Text>
                
                {!props.perfilHeader.perfilExterno && 
                    <TouchableOpacity onPress={() => navigation.goBack()} >
                        <Image source={require('../../../_assets/imagens/log-out.png')} />
                    </TouchableOpacity>
                }
            </View>
        }
    </View>
   ) 
}

export default Header