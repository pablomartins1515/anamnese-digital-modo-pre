
import { Container, Form, Background, BackLogIn } from "./styles";


import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Input } from '../../compontens/Input';
import { Button } from "../../compontens/Button";




export function SignUp() {
    return (
        <Container>

            <Background />    
            
            <Form>
                <h1>Anamnese Digital</h1>
                <p>Aplicação para gerenciar o estado clínico dos Municípios</p>
                <h2>Crie sua conta</h2>

                <Input
                    placeholder='Nome'
                    type='text'
                    icon={FiUser}
                >
                </Input>

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

                
                <Button  title='Criar conta'></Button>               
                  

                <BackLogIn to="/signin">
                    Voltar para o login
                </BackLogIn>

            </Form>

        </Container>
    );
}