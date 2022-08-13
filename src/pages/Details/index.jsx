
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
                            Introdução ao React
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

                
                    <Section title='Links Úteis'>
                        <Links>
                            <li><a href="#">https://www.rocketset.com.br/</a></li>
                            <li><a href="#">https://www.rocketset.com.br/</a></li>                    
                        </Links>
                    </Section>

                    <Section title="Marcadores">
                        <Tag title="Express" />
                        <Tag title="NodeJs" />

                    </Section>

                    <Logout to="/">
                         <Button title="Voltar" />
                    </Logout>
                    
                </Content>          
            </main>            
        </Container>        
    )
}