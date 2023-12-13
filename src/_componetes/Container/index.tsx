import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./Header";
import Footer from "./Footer/indes";
import { IContainer } from "./types";
import styles from "./styles";
import { useState } from "react";

const Container = (props: IContainer) => {
    const [filtro, setFiltro] = useState<string>('')
   return (
    <SafeAreaView style={styles.container}>
        <Header
            default={props.headerProps.default}
            headerNovaPublicacao={props.headerProps.headerNovaPublicacao}
            barraPesquisa={{
                value: filtro,
                onChange: (value: string) => setFiltro(value)
            }}
        />
        <View style={styles.content}>
        {props.children}
        </View>
        <Footer currentTab={props.footerProps.currentTab}/>
    </SafeAreaView>
   ) 
}

export default Container