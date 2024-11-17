
import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Card from '@mui/material/Card';
// Register the required components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data }) => {
  // Fallback to default values if data is not provided
  const active = data?.active || 0;
  const recovered = data?.recovered || 0;
  const deaths = data?.deaths || 0;

  const pieData = {
    labels: ["Active", "Recovered", "Deaths"],
    datasets: [
      {
        data: [active, recovered, deaths],
        backgroundColor: ["#1976d2", "green", "red"],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Allow custom sizing
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ width: "250px", height: "250px" }}>
    
      <Pie data={pieData} options={options} />
      
     
    </div>
  );
};

export default PieChart;
