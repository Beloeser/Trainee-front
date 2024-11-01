import React, { useState } from 'react';
import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { Container, Titulo, Campo, Label, Input } from "./Styles";

function Cadastro() {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Bem vindo');
    };

    return (
        <Container>
            <Titulo>Cadastro</Titulo>
            <form onSubmit={handleSubmit}>
                <Campo>
                    
                    <Input 
                        type="text" 
                        value={nome} 
                        onChange={(e) => setNome(e.target.value)} 
                        placeholder="Nome" 
                        required 
                    />
                </Campo>
                <Campo>
                    
                    <Input 
                        type="text" 
                        value={cargo} 
                        onChange={(e) => setCargo(e.target.value)} 
                        placeholder="Cargo" 
                        required 
                    />
                </Campo>
                <Campo>
                    
                    <Input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                    />
                </Campo>
                <Campo>
                    
                    <Input 
                        type="text" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        placeholder="Senha" 
                        required 
                    />
                </Campo>
                <Campo>
                    
                    <Input 
                        type="text" 
                        value={repetirSenha} 
                        onChange={(e) => setRepetirSenha(e.target.value)} 
                        placeholder="Repita a senha" 
                        required 
                    />
                </Campo>
                <p style={{color :" #ffffff"}}>

                 Já tem uma conta? Faça seu login "aqui"
                </p>

                
                <BotaoPadrao type="submit">Cadastrar</BotaoPadrao> 
            </form>
        </Container>
    );
}

export default Cadastro;
