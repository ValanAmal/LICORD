import { useState } from "react";
import Sidebar from "./Sidebar";
import BarChart from "./BarChart";
import CardComponent from "./CardComponent";
import "./dashboard.css"; 
import NewsTicker from "./NewsTicker";
import Navbar from "./Navbar";
import RankBoard from "./Rank";


export default function StudentDashboard() {
  const [grades, setGrades] = useState([]);
  const [assignments, setAssignments] = useState([]);


  return (
    <div className="dashboard-container">
      <Navbar/>
      <div className="dashboard-content">
        <div className="card-grid">
          
        </div>
      </div>
    </div>
  );
}






