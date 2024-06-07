import "./App.css";
import Cabecalho from "./Cabecalho.jsx";
import Corpo from "./Corpo.jsx";

// window.onSpotifyIframeApiReady = (IFrameAPI) => {
//   const element = document.getElementById('embed-iframe');
//   const options = {
//       uri: ('spotify:artist:0C0XlULifJtAgn6ZNCW2eu?si=5_Q0C3w_Qam44bLjR5Y0lw')
//     };
//   const callback = (EmbedController) => {};
//   IFrameAPI.createController(element, options, callback);
// };

export default function App() {
  return (
    <>
      <Cabecalho />
      <Corpo />
    </>
  );
}
