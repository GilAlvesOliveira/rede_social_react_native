import { View, Text } from "react-native";
import Container from "../../_componetes/Container";

const Home = () => {
    return (
    <Container 
    headerProps={{default: true}}
    footerProps={{currentTab: 'Home'}}>
        <Text>Home</Text>
    </Container>
    )
}

export default Home;