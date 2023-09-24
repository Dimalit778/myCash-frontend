import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useGlobalContext } from '../../Context/globalContext';
import { groupByMonth } from '../../utilits/GroupByMonth';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const { expenses, incomes } = useGlobalContext();

  const groupedIncomes = groupByMonth(incomes);
  const groupedExpenses = groupByMonth(expenses);

  const allMonths = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const labels = allMonths;

  const dataIncomes = allMonths.map((month) => groupedIncomes[month] || 0);
  const dataExpenses = allMonths.map((month) => groupedExpenses[month] || 0);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Monthly Incomes',
        data: dataIncomes,
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Change the color as needed
        borderColor: 'rgba(75, 192, 192, 1)', // Change the color as needed
        borderWidth: 1,
      },
      {
        label: 'Monthly Expenses',
        data: dataExpenses,
        backgroundColor: 'red', // Change the color as needed
        borderColor: 'rgba(75, 192, 192, 1)', // Change the color as needed
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  return (
    <div style={{ width: '80%' }}>
      <Bar options={options} data={data} />
    </div>
  );
};

export default LineChart;
