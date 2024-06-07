import Stack from '@mui/material/Stack';
import { Gauge } from '@mui/x-charts/Gauge';

import "./OdometroCombustivel.css";

import combustivelIcon from "./assets/imgs/combustivel.png";
import ponteiroIcon from "./assets/imgs/ponteiro-combustivel.png";

export default function OdometroCombustivel() {
  return (
    <div className="odometro-combustivel widgets-hover">
      <div className='odometro'>
        <Stack className='grafico-dia' direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 1, md: 3 }}>
          <Gauge innerRadius={50} width={170} height={170} value={60} startAngle={-90} endAngle={90} />
        </Stack>
        <div className='total-km'>60 km</div>
        <div className='texto-dia'>Hoje</div>
        <div className='texto-media'>Média/Dia: 28km</div>
      </div>
      <div className='combustivel'>
        <div className='marcador-combustivel'>
          <img className='icone-combustivel' src={combustivelIcon}/>
          <img className='icone-ponteiro' src={ponteiroIcon}/>
        </div>
        <div className='valor-combustivel'> 50%</div>
        <div className='texto-combustivel'>Combustível</div>
      </div>
    </div>
  )
}