import { useState } from "react";
import "./DataHoraStatus.css";

import menuBurg from "./assets/imgs/menu-burg.png";
import logo from "./assets/imgs/alt-trans.png";

export default function DataHoraStatus() {
  const [data, setData] = useState(new Date());

  setInterval(() => {
    setData(new Date())
  }, 60_000);
  
  return (
    <div className="data-hora-status">
      <div className="logo">
        <img className="menu-burg" src={menuBurg} alt="Logo Alt"/>
        <img className="alt" src={logo} alt="Logo Alt"/>
      </div>
      <div className="hora-data">
        <div className="hora">
          {data.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
        <div className="data">
          {data.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
        </div>
      </div>
    </div>
  )
}