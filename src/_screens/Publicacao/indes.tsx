import { View } from "react-native"
import Container from "../../_componetes/Container"

const Publicacao = () => {
    return (
        <Container 
            footerProps={{guiaAtual: "Publicacao"}}
            headerProps={{publicacaoHeader: {
                submit: () => {}
            }}}
            >
            <View>

            </View>
        </Container>
    )
}

export default Publicacao