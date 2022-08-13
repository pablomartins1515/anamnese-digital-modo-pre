import { Container } from "./styles";


export function ButtonTextRed ( { title, isActive = false , ...rest }) {
    return (
        <Container
            type="button"
            isActive={isActive}           
            {...rest}
        >
            { title }
        </Container>
    );
}