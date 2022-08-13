
import { Container, Links, Content, Logout } from "./styles";

import { Tag } from "../../compontens/Tag";
import { Button } from "../../compontens/Button";
import { Header } from "../../compontens/Header";
import { Section } from "../../compontens/Section";
import { ButtonTextRed } from "../../compontens/ButtonTextRed";




export function Details() {
    return (
        <Container>
            <Header /> 

            <main>
                <Content>              
                    <ButtonTextRed title="Excluir nota"/> 
                    
                        <h1>
                            Diagnóstico pré-operatório
                        </h1>
                        
                        <p>
                        Atesto que o paciente este paciente se apresenta  com:<br/>

                        a ) baixo risco de sofrer complicações cardiovasculares pelo porte do procedimento de cirurgia ortopédica de membro superior ( Menos de 1%). Apenas com febre alta e dores musculares que não prejudicam o andamento da futura operação.<br/>

                        b) Exames complementares:<br/>
                        Eletrocardiograma atual: Ritmo sinusal, dentro dos limites de normalidade para a idade.
                        Demais exames enviados sem alterações significativas.

                        Recomendações: 
                        Seguir a rotina normal do serviço e dieta de alimentação regular.

                        </p>

                
                    <Section title='Dados Pessoais'>
                        <Links>
                            <li><a href="#">Endereço Completo: <br/>Rua José Do Egito nº82 - Centro </a></li>
                            <li><a href="#">Contato: <br/> (99) 98457 - 4733</a></li>                    
                        </Links>
                    </Section>

                    <Section title="Filtros">
                        <Tag title="Febre Alta" />
                        <Tag title="Dores Musculares" />

                    </Section>

                    <Logout to="/home">
                         <Button title="Voltar" />
                    </Logout>
                    
                </Content>          
            </main>            
        </Container>        
    )
}
