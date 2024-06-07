import "./LocalNotificacaoUsuario.css";

import Sol from "./assets/imgs/sol.png";
import Lua from "./assets/imgs/lua.png";
import Notificacao from "./assets/imgs/notificacao.png";
import Usuario from "./assets/imgs/usuario.png";
import { useEffect, useState } from "react";


export default function LocalNotificacaoUsuario() {

  let DiaOuNoiteIcon
  let DiaOuNoite = new Date();
  
  if (DiaOuNoite.getHours() >= 6 && DiaOuNoite.getHours() < 18) {
    DiaOuNoiteIcon = Sol;
  } else {
    DiaOuNoiteIcon = Lua;
  }
  
  return (
    <div className="local-notificacao-usuario">
      <div className="status">
        <div className="previsao">
          <img className="icone-previsao" src={DiaOuNoiteIcon}/>
        </div>
        <div className="tempo-local">
          <div className="tempo"> 28º C</div>
          <div className="local">Natal/RN</div>
        </div>
      </div>
      <div className="notificacao">
        <img className="icone-notificacao" src={Notificacao}/>
      </div>
      <div className="usuario">
        <img className="icone-usuario" src={Usuario}/>
      </div>
    </div>
  )
}