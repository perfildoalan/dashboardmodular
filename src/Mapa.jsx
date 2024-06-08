import "./Mapa.css";

export default function Mapa() {
  
  let textoPesquisa = ""
  
  const verificaTecla = (ev) => {
    if (ev.key != "Delete" && ev.key != "Backspace" && ev.key != "Enter") {
      textoPesquisa = textoPesquisa + ev.key;
      console.log(textoPesquisa)
    } else if (ev.key == "Backspace" && ev.key != "Delete" && ev.key != "Enter") {
      textoPesquisa = textoPesquisa.slice(0, -1);
      console.log(textoPesquisa);
    } else if (ev.key == "Delete" && ev.key != "Backspace" && ev.key != "Enter") {
      textoPesquisa = ""
      console.log(textoPesquisa);
    } else if (ev.key == "Enter" && ev.key != "Backspace" && ev.key != "Delete" ) {
      window.open("https://www.google.com/maps/search/?api=1&query="+ textoPesquisa.replaceAll(' ', '%20'), "_blank");
      console.log(textoPesquisa);
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
