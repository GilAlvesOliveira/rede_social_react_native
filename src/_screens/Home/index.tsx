import { View, Text } from "react-native";
import Container from "../../_componetes/Container";
import Feed from "../../_componetes/Feed";

const Home = () => {
    return (
    <Container 
    headerProps={{default: true}}
    footerProps={{guiaAtual: 'Home'}}>
        <Feed />
    </Container>
    )
}

export default Home;