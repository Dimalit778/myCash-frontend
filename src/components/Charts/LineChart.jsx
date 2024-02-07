import React from 'react';
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
import { groupByMonth } from 'Hooks/GroupByMonth';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = ({ allExpenses, allIncomes }) => {
  let groupedIncomes = 0;
  let groupedExpenses = 0;

  if (allExpenses && allIncomes) {
    groupedIncomes = groupByMonth(allIncomes);
    groupedExpenses = groupByMonth(allExpenses);
  }

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
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Monthly Expenses',
        data: dataExpenses,
        backgroundColor: 'red',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 15,
          },
        },
      },
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        margin: 'auto',
        width: 'auto',
        height: '60vh',
      }}
    >
      <Bar options={options} data={data} />
    </div>
  );
};

export default LineChart;
