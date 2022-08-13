import { Container, Teste } from "./styles";


export function Button2({title, loading = false, ...rest }) {
    return (
        <Container 
            type="button"
            disabled={loading}
            {...rest}
            >
                
            
                
            {loading ? 'Carregando...' : title }
        </Container>
    );
} 