import React, { useState } from 'react';
import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { Container, Titulo, Campo, Label, Input } from "./Styles";
import api from "../Services/api"
import Header from '../../Components/Header';
import  useAuthStore  from '../../stores/auth';
import { useNavigate } from 'react-router-dom';


function Login() {
   
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [carregando ,  setCarregando] = useState(false)
    const token =useAuthStore((state )=> state.token)
    const setToken =useAuthStore((state )=> state.setToken) ;
    const usuario =useAuthStore((state) => state.usuario) ;
    const navigate =useNavigate() ;
   console.log({token , usuario})
   
    const handleSubmit = async (e) => {
        e.preventDefault();
        alert('Bem vindo');
        console.log({email , senha})

        try{ setCarregando(true)
            const res = await api.post("/login" ,{email , senha})
            const {token} = res.data ;

            setToken(token) ;
            navigate("/")
        }catch(erro){
            console.error(erro) ;
            alert(erro.message) ;
        }finally{
            setCarregando(false)
        }

        if (carregando)
            return(
        <Container>
           <h1> Carregando ...</h1>
        </Container>) ;
    }

const goToCadastro = () => {
    navigate("/cadastro");
};


    return (
      <> <Header/>
       
       <Container>
            
           
            <Titulo>Login</Titulo>
            <form onSubmit={handleSubmit}>
                <Campo><Input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        required 
                    /></Campo>
                    <Campo>
                    
                    <Input 
                        type="password" 
                        value={senha} 
                        onChange={(e) => setSenha(e.target.value)} 
                        placeholder="Senha" 
                        required 
                    />
                </Campo>
                <p style={{ color: "#ffffff" }}>
                    Não tem login? Faça seu cadastro{" "}
                    <span style={{ color: "yellow", textDecoration: "underline", cursor: "pointer" }} onClick = {goToCadastro}>
                        aqui
                    </span>
                </p>

                
                <BotaoPadrao type="submit">Entrar</BotaoPadrao> 
                
                </form> </Container> </>  
                
            )

}
export default Login ;