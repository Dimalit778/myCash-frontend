import * as React from 'react';
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie, PolarArea } from 'react-chartjs-2';
import { filterByMonthAndYear } from 'Hooks/filterByMonthYear';
import { FilterList } from '@mui/icons-material';
import { categories } from 'Hooks/categoryList';

export default function PieActiveArc({ list, date }) {
  console.log(list);

  //?------{  Filter the list by Month and Year }
  const filteredList = filterByMonthAndYear(list, date);
  // 'rgb(75, 192, 192)',
  // 'rgb(255, 205, 86)',
  // 'rgb(201, 203, 207)',
  // 'rgb(54, 162, 235)',
  return (
    <>
      <PolarArea
        data={{
          labels: categories.map((item) => item.label),
          datasets: [
            {
              label: filteredList.map((filter) => filter.category),
              data: filteredList.map((filter) => filter.amount),
            },
          ],
        }}
      />
      ;
    </>
  );
}
