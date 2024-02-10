import * as React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { PolarArea } from 'react-chartjs-2';
import { filterByMonthAndYear } from 'hooks/filterByMonthYear';

export default function PieActiveArc({ list, date }) {
  //?------{  npm starFilter the list by Month and Year }
  const filteredList = filterByMonthAndYear(list, date);

  const categoryTotals = filteredList.reduce((acc, transaction) => {
    const { category, amount } = transaction;

    // If the category is not in the accumulator, add it; otherwise, update the total amount
    if (!acc[category]) {
      acc[category] = amount;
    } else {
      acc[category] += amount;
    }

    return acc;
  }, {});
  // Convert the object into an array of objects with category and total amount
  const uniqueCategories = Object.keys(categoryTotals).map((category) => ({
    category,
    totalAmount: categoryTotals[category],
  }));

  return (
    <div style={{ height: '90%' }} className="d-flex justify-content-center ">
      <PolarArea
        data={{
          labels: uniqueCategories.map((item) => item.category),
          datasets: [
            {
              data: uniqueCategories.map((category) => category.totalAmount),
              backgroundColor: [
                '#0000FF',
                '#7FFF00',
                '#A52A2A',
                '#6495ED',
                '#FF8C00',
                '#2F4F4F',
                '#00BFFF',
                '#FFD700',
              ],
            },
          ],
        }}
      />
    </div>
  );
}
