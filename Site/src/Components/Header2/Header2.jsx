import useAuthStore from "../../stores/auth";
import { Container } from "./Styles";
import { Link, useNavigate } from "react-router-dom";

  function Header2() {
    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth); 
    const navigate = useNavigate()
    const logout = () =>
 {

clearAuth() 
navigate("/login")
 }
    return (
        <Container>
            <Logo><img src="/src/Images/canecaBolsonaro.jpg"  /></Logo>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/cadastro">Cadastro</Link>
            <Link to="/perfil">Perfil</Link>

            {!! usuario && (
                <>
                    <Link to="/perfil">Perfil</Link>
                    <h2>Seja Bem-Vindo, {usuario.nome}</h2>
                    <button type="button" onClick={logout}>
                        Deslogar
                    </button>
                </>
            )}
        </Container>
    );

  }
export default Header2 ;