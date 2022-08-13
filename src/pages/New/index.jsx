
import { Container, Form, FormH, } from "./styles";

import { HeaderGreen } from "../../compontens/HeaderGreen";
import { Input } from  "../../compontens/Input";
import { Textarea } from  "../../compontens/Textarea";
import { NoteItem } from  "../../compontens/NoteItem";
import { Section } from  "../../compontens/Section";
import { Section2 } from  "../../compontens/Section2";
import { Button } from "../../compontens/Button";




export function New() {
    return (
        <Container>
           <HeaderGreen />

           <main>
                <FormH>
                    
                        <header>
                            <h1>Avaliação Pré - Operatória</h1>
                            <Link to="../">Voltar</Link>
                        </header>                    
                    
                </FormH>

                <Form>
                    <Input placeholder='Nome do Paciente' />
                    <Textarea  placeholder='Diagnóstico'/>

                    <Section2 title="Dados Pessoais">
                        <NoteItem value="Telefone (99) 98457 - 4733"/>
                        <NoteItem isNew  placeholder="Adcionar informação complementar"/>  
                    </Section2>

                    <Section2 title="Filtro de Enfermidades">
                        <div className="tags">
                            <NoteItem value="Febre"/>
                            <NoteItem isNew  placeholder=" Novo Filtro"/>
                        </div>                          
                    </Section2>
                    
                    <Button title='Salvar'/>
                </Form>
                                
            </main>

                   
        </Container>       
    );
}