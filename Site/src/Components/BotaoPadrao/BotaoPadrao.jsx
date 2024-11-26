import  { StyleBotaopadrao } from  "./Styles" ;

 function BotaoPadrao (props) { 
    return (
    <div>
        <StyleBotaopadrao onClick ={props.onClick}>
            Criar Conta
        </StyleBotaopadrao>
    </div>
 )
 }
 export default BotaoPadrao