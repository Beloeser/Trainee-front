import useAuthStore from "../../stores/auth";
import { HeaderContainer, Logo, HeaderContent, Nav } from "./Styles";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const usuario = useAuthStore((state) => state.usuario);
  const clearAuth = useAuthStore((state) => state.clearAuth);
  const navigate = useNavigate();

  const logout = () => {
    clearAuth();
    navigate("/login");
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo>
          <img src="/src/Images/cpe_logo.svg" />
        </Logo>

        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </Nav>

        <Nav>
          <ul>
            <li>
              <Link to="/cadastro">Fazer Cadastro</Link>
            </li>
          </ul>
        </Nav>

        <Nav>
          <ul>
            <li>
              <Link to="/login">Fazer Login</Link>
            </li>
          </ul>
        </Nav>

        {!!usuario && (
          <>
          <Logo>
          <img src="/src/Images/canecaBolsonaro.jpg" />
        </Logo>

        <Nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </Nav>
        
            <Nav>
              <ul>
                <li>
                  <Link to="/perfil">Perfil</Link>
                </li>
              </ul>
            </Nav>
            <h2>Seja Bem-Vindo, {usuario.nome}</h2>
            <button type="button" onClick={logout}>
              Deslogar
            </button>
          </>
        )}
      </HeaderContent>
    </HeaderContainer>
  );
}

export default Header;