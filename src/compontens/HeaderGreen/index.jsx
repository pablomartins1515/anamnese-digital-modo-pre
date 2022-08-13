import { RiShutDownLine } from "react-icons/ri";
import { Container, Logout, Profile } from "./styles";

export function HeaderGreen () {
    return (
        <Container>
            <Profile to='../profile'>
                <img src="https://github.com/rodrigorgtic.png"
                     alt="Foto do Usuário"
                />
                <div>
                    <span>Bem-vindo,</span>
                    <strong>Rodrigo Gonçalves</strong>
                </div>                 
            </Profile>

            <Logout to="../">
                <RiShutDownLine />
            </Logout >                           
        </Container>
    );
}