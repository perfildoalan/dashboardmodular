import "./Mapa.css";

export default function Mapa() {

  const verificaTecla = (ev) => {
    console.log(ev);
    if (verificaTecla.key == "Enter") {
      
    }
  }
  
  return (
    <div className="mapa">
      <iframe className="maptiler" width="100%" height="300" src="https://api.maptiler.com/maps/6eaf00ad-8e34-45fb-9b41-b8f60ee88f45/?key=1JxU40A276TiLPesxAG1#14.0/-5.82645/-35.21191/60">
      </iframe>
        <div className="barra-pesquisa">
          <input onKeyDown={verificaTecla} className="input-pesquisa" type="text" name="pesquisar" placeholder="Pesquisar"/>
        </div>
    </div>
  )
}