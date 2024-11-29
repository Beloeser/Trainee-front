import React, { useState } from 'react';
import BotaoPadrao from "../../Components/BotaoPadrao/BotaoPadrao";
import { Container, Titulo, Campo, Input } from "./Styles";
import api from "../Services/api";
import Header from '../../Components/Header';
import { useNavigate } from 'react-router-dom';

function Cadastro() {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [repetirSenha, setRepetirSenha] = useState('');
    const [carregando, setCarregando] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log({ nome, cargo, email, senha, repetirSenha });

        if (senha !== repetirSenha) {
            alert("As senhas não coincidem!");
            return;
        }

        try {
            setCarregando(true);

            const res = await api.post("/cadastro", { nome, cargo, email, senha });
            console.log(res);
            alert('Cadastro realizado com sucesso!');
            navigate("/login"); 
        } catch (erro) {
            console.error(erro);
            alert(erro.message);
        } finally {
            setCarregando(false);
        }
    };

    if (carregando) {
        return (
            <Container>
                <h1>Carregando...</h1>
            </Container>
        );
    }

    
    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <>
            <Header />
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
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            required
                        />
                    </Campo>
                    <Campo>
                        <Input
                            type="password"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Senha"
                            required
                        />
                    </Campo>
                    <Campo>
                        <Input
                            type="password"
                            value={repetirSenha}
                            onChange={(e) => setRepetirSenha(e.target.value)}
                            placeholder="Repita a senha"
                            required
                        />
                    </Campo>
                    <p style={{ color: "#ffffff" }}>
                        Já tem cadastro? Para fazer login, clique{" "}
                        <span
                            style={{
                                color: "yellow",
                                textDecoration: "underline",
                                cursor: "pointer",
                            }}
                            onClick={goToLogin} // Função para navegação
                        >
                            aqui
                        </span>
                    </p>
                    <BotaoPadrao type="submit">Cadastrar</BotaoPadrao>
                </form>
            </Container>
        </>
    );
}

export default Cadastro;
