import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IContainer } from "./types";
import styles from "./styles";
import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer/indes";
import Pesquisar from "./Header/Pesquisa";

const Container = (props: IContainer) => {
    const [filtro, setFiltro] = useState<string>('')
   return (
    <SafeAreaView style={styles.container}>
        <Header
            publicacaoHeader={props.headerProps.publicacaoHeader}
            editarPerfilHeader={props.headerProps.editarPerfilHeader}
            perfilHeader={props.headerProps.perfilHeader}
            default={props.headerProps.default}
            barraPesquisa={{
                value: filtro,
                onChange: (value: string) => setFiltro(value)
            }}
        />
        <Pesquisar filtro={filtro} />
        <View style={styles.content}>
        {props.children}
        </View>
        <Footer guiaAtual={props.footerProps.guiaAtual} />
    </SafeAreaView>
   ) 
}

export default Container