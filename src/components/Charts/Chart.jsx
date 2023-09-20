import React from 'react';
import { Pie } from 'react-chartjs-2';
import './chart.css';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale);

const Chart = () => {
  const data = {
    labels: ['Expenses', 'Balance', 'Incomes'],
    datasets: [
      {
        data: ['Expenses', 'Balance', 'Incomes'],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  // const options = {
  //   scales: {
  //     y: {
  //       beginAtZero: true,
  //     },
  //   },
  //   legend: {
  //     lables: {
  //       fontSize: 26,
  //     },
  //   },
  // };
  return (
    <div className="chart d-flex flex-column  ">
      <h1 className="title ">total</h1>

      {/* <Pie data={data} height={400} width={400} /> */}
    </div>
  );
};

export default Chart;
