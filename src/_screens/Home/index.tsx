import { View, Text } from "react-native";
import Container from "../../_componetes/Container";

const Home = () => {
    return (
    <Container 
    headerProps={{default: true}}
    footerProps={{guiaAtual: 'Home'}}>
        <Text>Home</Text>
    </Container>
    )
}

export default Home;