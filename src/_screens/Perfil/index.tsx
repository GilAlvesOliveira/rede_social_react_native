import Container from '../../_componetes/Container';
import Feed from '../../_componetes/Feed';

const Perfil = () => {
    return (
        <Container
            headerProps={{ default: true}}
            footerProps={{ guiaAtual: 'Perfil'}}
        >
            <Feed />
        </Container>
    )
}

export default Perfil