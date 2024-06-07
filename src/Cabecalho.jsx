import "./Cabecalho.css";
import DataHoraStatus from "./DataHoraStatus";
import LocalNotificacaoUsuario from "./LocalNotificacaoUsuario";

export default function Cabecalho() {
  return (
    <header>
      <DataHoraStatus/>
      <LocalNotificacaoUsuario/>
    </header>
  )
}