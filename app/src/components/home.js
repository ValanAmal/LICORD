import { useState } from "react";
import Sidebar from "./Sidebar";
import BarChart from "./BarChart";
import CardComponent from "./CardComponent";
import "./dashboard.css"; 
import NewsTicker from "./NewsTicker";


export async function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target.result);
        resolve(data);
      } catch (error) {
        console.error("Error reading file:", error);
        resolve({ grades: [], assignments: [] });
      }
    };
    reader.readAsText(file);
  });
}


export default function StudentDashboard() {
  const [grades, setGrades] = useState([]);
  const [assignments, setAssignments] = useState([]);

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const data = await readFile(file);
      setGrades(data.grades || []);
      setAssignments(data.assignments || []);
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h1>Student Dashboard</h1>
        <input type="file" onChange={handleFileUpload} className="file-upload" />
        <div className="card-grid">
          <CardComponent title="Grades">
            <ul>
              {grades.map((grade, index) => (
                <li key={index}>{grade.subject}: {grade.grade}</li>
              ))}
            </ul>
          </CardComponent>
          <CardComponent title="Upcoming Assignments">
            <ul>
              {assignments.map((assignment, index) => (
                <li key={index}>{assignment.title} - Due {assignment.due}</li>
              ))}
            </ul>
          </CardComponent>
          <CardComponent title="Performance">
            <BarChart data={[90, 85, 92]} />
          </CardComponent>
          
        </div>
      </div>
    </div>
  );
}






