import "./Lembretes.css";
import Afazer from "./Afazer"

export default function Lembretes() {
  return (
    <div className="lembretes">
      <div className="titulo-lembretes">Lembretes</div>
      <form className="lista-lembretes" >
        <Afazer texto="Comprar comida"/>
        <Afazer texto="Fazer feira"/>
        <Afazer texto="Pintar unha"/>
      </form>
    </div>
  )
}