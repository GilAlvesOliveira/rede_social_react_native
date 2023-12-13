import { View, Image, Text, TextInput } from "react-native";
import { IHeader } from "./types";
import styles from "./styles";
import { colors } from '../../../../app.json';


const Header = (props: IHeader) => {
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
    </View>
   ) 
}

export default Header