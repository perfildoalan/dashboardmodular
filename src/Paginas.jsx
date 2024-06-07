import "./Paginas.css";

import Carro from "./Carro";
import StatusCarro from "./StatusCarro";
import OdometroCombustivel from "./OdometroCombustivel";
import ConsumoCombustivel from "./ConsumoCombustivel";
import Mapa from "./Mapa";
import Lembretes from "./Lembretes";
import Spotify from "./Spotify";

export default function Paginas() {
  return (
    <div className="paginas">
      <div className="pagina-carro">
        <Carro/>
        <StatusCarro/>
        <OdometroCombustivel/>
        <ConsumoCombustivel/>
      </div>
      <div className="pagina-widgets">
        <Mapa/>
        <div className="widgets-menores widgets-hover">
          <Lembretes/>
          <Spotify/>
        </div>
      </div>
    </div>
  )
}