import { StyleBotaopadrao } from "./Styles";

function BotaoPadrao({ onClick, type = "button", children }) {
    return (
        <StyleBotaopadrao onClick={onClick} type={type}>
            {children}
        </StyleBotaopadrao>
    );
}

export default BotaoPadrao;