import "./Menu.css";

import homeIcon from "./assets/imgs/home.png";
import toolsIcon from "./assets/imgs/tools.png";
import settingsIcon from "./assets/imgs/settings.png";

export default function Menu() {
  return (
    <div className="menu">
      <div className="botao">
        <img className="icone-home" src={homeIcon}/>
      </div>
      <div className="botao">
        <img className="icone-tools" src={toolsIcon}/>
      </div>
      <div className="botao">
        <img className="icone-settings" src={settingsIcon}/>
      </div>
    </div>
  )
}