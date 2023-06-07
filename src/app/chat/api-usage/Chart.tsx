"use client";

import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartOptions } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface IAPIUsageChartProps {
  data: {
    [x: string]: number;
  };
}

export default function APIUsageChart({ data: _data }: IAPIUsageChartProps) {
  const labels = Object.keys(_data);

  const options: ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const data = {
    labels,
    datasets: [
      {
        data: labels.map((item) => _data[item]),
        backgroundColor: "rgb(122 36 255)",
      },
    ],
  };

  return <Bar width={500} options={options} data={data} />;
}
