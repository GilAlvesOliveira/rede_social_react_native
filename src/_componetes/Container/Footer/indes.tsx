import { useNavigation } from "@react-navigation/native";
import { View, Image, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../_rotas/RootStackParams";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";
import { IFooter } from "./type";

const Footer = (props: IFooter) => {
    type navigationTypes = NativeStackNavigationProp<RootStackParamList, 'Login'>
    const navigation = useNavigation<navigationTypes>()

    const menu = [
        {
            title: "Home",
            onPress: () => {navigation.navigate('Home')},
            icone: require('../../../_assets/imagens/home.png'),
            iconeAtivo: require('../../../_assets/imagens/homeAtivo.png'),
        }, {
            title: "NovaPublicacao",
            onPress: () => {navigation.navigate('NovaPublicacao')},
            icone: require('../../../_assets/imagens/novaPublicacao.png'),
            iconeAtivo: require('../../../_assets/imagens/novaPublicacaoAtivo.png'),
        },
        {
            title: "Perfil",
            onPress: () => {navigation.navigate('Perfil')},
            icone: require('../../../_assets/imagens/usuario.png'),
            iconeAtivo: require('../../../_assets/imagens/usuarioAtivo.png'),
        }
    ]
    
   return (
       <View style={styles.container}>
       <View style={styles.row}>
           {menu.map((botao, index) => (
               <TouchableOpacity onPress={botao.onPress} key={index}>
                   <Image source={props.currentTab === botao.title ? botao.iconeAtivo : botao.icone}></Image>
               </TouchableOpacity>
           ))}
       </View>
   </View>
   ) 
}

export default Footer