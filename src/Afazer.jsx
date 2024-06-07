import { useState } from "react"
import "./Afazer.css"

export default function Afazer({texto}) {
  const [marcado, setMarcado] = useState(false);

  const handleClick = (ev) => {
    setMarcado(ev.target.checked);
  }
  
  return (
    <div>
      <label className={marcado ? "marcado" : ""}>
        <input onClick={handleClick} type="checkbox" className="afazer" value={texto}></input>
        {texto}
      </label>
    </div>
  )
}