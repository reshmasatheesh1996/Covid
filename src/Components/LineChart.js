import React from "react";
import { Line } from "react-chartjs-2"; // Import the Line component
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from "chart.js";

// Register required components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler);

const LineChart = ({ data }) => {
  // Check if data is null or undefined
  if (!data || !data.active || !data.recovered || !data.deaths) {
    return <div>Loading...</div>; // You can also replace this with a spinner or another indicator
  }

  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Active Cases",
        data: data.active,
        borderColor: "#1976d2",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.4,
        borderWidth: 2,
        pointStyle: "rectRounded",
        pointRadius: 5,
        pointBackgroundColor: "#1976d2",
      },
      {
        label: "Recovered Cases",
        data: data.recovered,
        borderColor: "green",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderDash: [5, 5],
        tension: 0.4,
        borderWidth: 2,
        pointStyle: "circle",
        pointRadius: 5,
        pointBackgroundColor: "green",
      },
      {
        label: "Deaths",
        data: data.deaths,
        borderColor: "red",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        tension: 0.1,
        borderWidth: 3,
        pointStyle: "star",
        pointRadius: 6,
        pointBackgroundColor: "red",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          usePointStyle: true,
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        text: "COVID-19 Cases Over Time",
        font: {
          size: 16,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: "rgba(200, 200, 200, 0.3)",
        },
        ticks: {
          font: {
            size: 10,
          },
        },
      },
    },
  };

  return (
    <div style={{ width: "400px", height: "300px", margin: "0 auto" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default LineChart;
