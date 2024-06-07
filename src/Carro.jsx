import "./Carro.css";

import imgCarro from "./assets/imgs/carro.png";

export default function Carro() {
  return (
    <div className="carro widgets-hover">
      <div className="nome-carro">Marca Modelo</div>
      <img className="imagem-carro" src={imgCarro}/>
    </div>
  )
}