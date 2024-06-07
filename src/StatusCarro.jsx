import "./StatusCarro.css";

import AirIcon from "./assets/imgs/air.png";

export default function StatusCarro() {
  return (
    <div className="status-carro widgets-hover">
      <div className="ar-condicionado">
        <img className="icone-ar" src={AirIcon} />
        <label className="switch">
          <input type="checkbox" />
          <span className="slider round"></span>
        </label>
        <div className="temperatura-ar">19ºC</div>
      </div>
      <span className="pressao-pneu">
        30<span className="psi">psi</span>
      </span>
      <div className="bateria">
        <div className="status-bateria">100%</div>
        <div className="icone-bateria cheia"></div>
      </div>
    </div>
  );
}
