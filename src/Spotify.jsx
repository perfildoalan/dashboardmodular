import "./Spotify.css";
import SpotifyIcon from "./assets/imgs/spotify.png"

export default function Spotify() {
  window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById("embed-iframe");
    const options = {
      uri: 'spotify:playlist:37i9dQZF1DZ06evO15Ttp6',
      theme: 'dark',
      height: '302'
    };
    const callback = (EmbedController) => {};
    IFrameAPI.createController(element, options, callback);
  };

  return (
    <div className="spotify">
      <div id="embed-iframe"></div>
      <span className="marca-spotify"><img className="icone-spotify" src={SpotifyIcon}/><div className="nome-spotify">Spotify</div></span>
    </div>
  );
}
