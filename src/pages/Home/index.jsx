import { FiPlus, FiSearch} from "react-icons/fi";

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../compontens/Header";
import { ButtonText } from "../../compontens/ButtonText";
import { Note } from "../../compontens/Note";
import { Input } from "../../compontens/Input";
import { Section} from "../../compontens/Section"


export function Home() {
    return (
        <Container>
           <Brand>
                <h1>ANAMNESE</h1>
            </Brand>

            <Header />

            < Menu>
                <li><ButtonText title="Todos" isActive></ButtonText></li>
                <li><ButtonText title="Pressão Arterial"></ButtonText></li>
                <li><ButtonText title="Febre Alta"></ButtonText></li>
                <li><ButtonText title="Dores Musculares"></ButtonText></li>
            </Menu>

            <Search>
                <Input placeholder='Pesquisar pelo título' icon={FiSearch}/>
            </Search>

            <Content>
                <Section title="Nome dos Pacientes">
                    <Note data={{
                        title: 'Pedro de Sousa Martins',
                        tags: [
                            { id:'1', name: 'Febre Alta'},
                            { id:'2', name: 'Dores Musculares'},
                                                        
                        ]
                    }}/>

                    <Note data={{
                        title: 'Maria Oliveira Costa',
                        tags: [
                            { id:'1', name: 'Febre Alta'},
                            { id:'2', name: 'Dores Musculares'},
                                                        
                        ]
                    }}/>

                </Section>
            </Content>

            <NewNote to='./new'>
                <FiPlus/>
                Criar Nota

            </NewNote>

        </Container>       
    );
}