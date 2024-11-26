import React, { useState } from 'react';
import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { Container, Titulo, Campo, Label, Input } from "./Styles";


function Login() {
   
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Bem vindo');
    };
    return (
        <Container>
            <Titulo>Login</Titulo>
            <form onSubmit={handleSubmit}>
                <Campo><Input 
                        type="text" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                    /></Campo>
                    <Campo>
                    
                    <Input 
                        type="text" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        placeholder="Senha" 
                        required 
                    />
                </Campo>
                <p style={{ color: "#ffffff" }}>
                    Não tem login? Faça seu cadastro{" "}
                    <span style={{ color: "yellow", textDecoration: "underline", cursor: "pointer" }}>
                        aqui
                    </span>
                </p>

                
                <BotaoPadrao type="submit">Entrar</BotaoPadrao> 
                
                </form> </Container>   )

}
export default Login ;