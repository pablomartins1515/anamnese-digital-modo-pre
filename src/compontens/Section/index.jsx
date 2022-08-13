import { Container } from "./styles";


export function Section ({title, children}) {
    return (

        //depois remover to="/details/1 para fucionar as rotas com o beckend"
        <Container to="/details/1">
            <h2>{title}</h2>
            {children}
        </Container>
    );
}