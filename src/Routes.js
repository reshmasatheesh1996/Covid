import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Filter from './Components/Filter';
import LineChart from './Components/LineChart';
import MapView from './Components/MapView';
import PieChart from './Components/PieChart';
import Dashboard from './Components/Dashboard';
import Sidebar from './Components/Sidebar';
const Routers = () => {
    return (
        <Routes>
             <Route path="/" element={<Dashboard />} />
             <Route path="//" element={<Sidebar />} /> 
            <Route path="/filter" element={<Filter />} />
            <Route path="/linechart" element={<LineChart />} />
            <Route path="/mapview" element={<MapView />} />
            <Route path="/piechart" element={<PieChart />} />
            {/* Redirect to "/filter" if no route matches */}
            <Route path="*" element={<Navigate to="/filter" />} />
        </Routes>
    );
};

export default Routers;
