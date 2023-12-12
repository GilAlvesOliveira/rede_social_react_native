import { View, Text } from "react-native";
import Container from "../../_componetes/Container";

const Home = () => {
    return (
    <Container footerProps={{currentTab: 'Home'}}>
        <Text>Home</Text>
    </Container>
    )
}

export default Home;