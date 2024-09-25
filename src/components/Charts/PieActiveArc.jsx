import React from "react";
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from "chart.js";
import { PolarArea } from "react-chartjs-2";
import { filterByMonthAndYear } from "hooks/filterByMonthYear";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export default function PieActiveArc({ list, date }) {
  // Your existing code for data processing remains the same
  const filteredList = filterByMonthAndYear(list, date);

  const categoryTotals = filteredList.reduce((acc, transaction) => {
    const { category, amount } = transaction;
    if (!acc[category]) {
      acc[category] = amount;
    } else {
      acc[category] += amount;
    }
    return acc;
  }, {});

  const uniqueCategories = Object.keys(categoryTotals).map((category) => ({
    category,
    totalAmount: categoryTotals[category],
  }));

  return (
    <div style={{ height: "90%" }} className="d-flex justify-content-center ">
      <PolarArea
        data={{
          labels: uniqueCategories.map((item) => item.category),
          datasets: [
            {
              data: uniqueCategories.map((category) => category.totalAmount),
              backgroundColor: ["#0000FF", "#7FFF00", "#A52A2A", "#6495ED", "#FF8C00", "#2F4F4F", "#00BFFF", "#FFD700"],
            },
          ],
        }}
      />
    </div>
  );
}
