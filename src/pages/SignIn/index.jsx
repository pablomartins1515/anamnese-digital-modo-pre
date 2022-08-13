
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from "react-icons/fi";
import { Input } from '../../compontens/Input';
import { Button } from '../../compontens/Button';

import { Link} from 'react-router-dom';



export function SignIn() {
    return (
        <Container>
            
                <Form>
                    <h1>Anamnese Digital</h1>
                    <p>Aplicação para gerenciar o estado clínico dos Municípios</p>
                    <h2>Faça seu Login</h2>

                    <Input
                        placeholder='E-mail'
                        type='text'
                        icon={FiMail}
                    >
                    </Input>

                    <Input
                        placeholder='Senha'
                        type='password'
                        icon={FiLock}
                    >
                    </Input>

                    
                    <Button title='Entrar'>
                        
                    </Button>

                                       
                    <Link to="/register">
                        Criar conta
                    </Link>


                </Form>
                <Background />
                       

        </Container>
    );
}