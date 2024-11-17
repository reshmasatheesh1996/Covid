import React, { useState, useEffect } from "react";
import StatsCard from "./StatsCard";
import Sidebar from "./Sidebar";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import StateFilter from "./Filter";
import MapView from "./MapView";
import data from "../assests/data.json";
function Dashboard() {
  const [pieData, setPieData] = useState(null);
  const [linechart, setLineChartData] = useState(null);
  const [mapData, setMapData] = useState(null);
  const [selectedState, setSelectedState] = useState(""); // To store selected state
  const [sidebarColor, setSidebarColor] = useState("#f5f5f5"); // Default sidebar color
  const [states, setStates] = useState([]);
  const [coordinates, setCoordinates] = useState([15.3173, 75.7139]); // Default to Karnataka

  useEffect(() => {
    // Setting data from JSON
    setStates(data.states);
    setPieData(data.pieData.Karnataka); // Default state: Karnataka
    setLineChartData(data.lineChart.Karnataka); // Default state: Karnataka
    setCoordinates(data.states.find(state => state.name === "Karnataka").coordinates); // Default coordinates: Karnataka
  }, []);

  const handleStateChange = (state) => {
    setSelectedState(state);
  
    const selectedStateData = data.states.find((s) => s.name === state);
    const selectedCoordinates = selectedStateData?.coordinates;
  
    // Log coordinates to verify correctness
    console.log("Selected State Coordinates:", selectedCoordinates);
  
    setCoordinates(selectedCoordinates || [15.3173, 75.7139]); // Default to Karnataka if no coordinates
  };
  


  const containerStyles = {
    display: "flex",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  };

  const sidebarStyles = {
    flex: "0 0 250px", // Sidebar width
    backgroundColor: sidebarColor,
    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
  };

  const contentStyles = {
    flex: 1,
    padding: "20px",
    backgroundColor: "#f4f6f8",
  };

  const statsStyles = {
    display: "flex",
    gap: "20px",
    alignItems: "stretch", // Ensures cards are stretched to the same height
    justifyContent: "space-between",
    marginTop: "20px", // Adds spacing between filter and charts
  };
  

  const cardStyles = {
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    padding: "20px",
    width: "48%", // Adjust width to fit side-by-side
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "300px", // Fixed height for the cards to ensure consistency
  };
  

  const mapContainerStyles = {
    backgroundColor: "#fff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    marginTop: "20px",
    padding: "0", // Remove padding to allow the map to take full space
    display: "flex", // Use flex to center the map
    justifyContent: "center",
    alignItems: "center",
    height: "300px", // Fixed height for the map
    width: "100%", // Ensure it spans the full width of the container
  };
  
  


  const pieChartStyles = {
    width: "100%",
    height: "100%",
  };
  
  const LineChartStyles = {
    width: "100%",
    height: "100%",
  };
  
  return (
    <div style={containerStyles}>
      {/* Sidebar */}
      <div style={sidebarStyles}>
        <Sidebar />
      </div>

      {/* Main Dashboard Content */}
      <div style={contentStyles}>
        {/* State Filter */}
        <div style={{ marginBottom: "20px" }}>
          <StateFilter states={states} onStateChange={handleStateChange} />
        </div>

        {/* Stats Cards */}
        <div style={statsStyles}>
          {/* Pie Chart Card */}
          <div style={cardStyles}>
            <h3>Cases Overview</h3>
            <PieChart data={pieData} style={pieChartStyles} />
          </div>

          {/* Line Chart Card */}
          <div style={cardStyles}>
            <h3>Cases Trends</h3>
            <LineChart data={linechart} style={LineChartStyles} />
          </div>
        </div>

        {/* Map View Card */}
        <div style={mapContainerStyles}>
         
        
        {coordinates ? (
  <MapView data={data} coordinates={coordinates} />
) : (
  <div>Loading map...</div>  // Show a loading indicator until coordinates are available
)}

        
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
