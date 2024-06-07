import * as React from "react";
import { BarPlot } from "@mui/x-charts/BarChart";

import "./ConsumoCombustivel.css";
import { ChartsTooltip, ChartsXAxis, ChartsYAxis, ResponsiveChartContainer } from "@mui/x-charts";

const uData = [15, 10, 4, 8, 20];
const xLabels = ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5"];

export default function ConsumoCombustivel() {
  return (
    <div>
      <div className="consumo-combustivel">
        <ResponsiveChartContainer 
          series={[{ data: uData, type: 'bar' }]}
          xAxis={[{ scaleType: 'band', data: xLabels, id: "x-axis-id" }]}
          yAxis={[{
            label: 'Litros',
            colorMap: {
              type: 'continuous',
              min: 0,
              max: 40,
              color: ['green', 'red'],
            }
          }]}
        >
          <BarPlot />
          <ChartsYAxis />
          <ChartsXAxis />
          <ChartsTooltip />
        </ResponsiveChartContainer>
        <div className="texto-grafico-consumo">
          Consumo/Mês de combustível
        </div>
      </div>
    </div>
  );
}
