import React from 'react';
import "./Sidebar.css"

export default function Sidebar() {
  return (
    <div className="Navigation">
      <h2 className="navh1">Navigation</h2>
      <ul>
        <li className="t1"> <a href="./home">Dashboard</a></li>
        <li className="t2"> <a href="./Calendar">Calendar</a></li>
        <li className="t2"> <a href="./UploadCertificate">Upload</a></li>
        <li className="t3"> <a href="./home">Settings</a></li>
      </ul>
    </div>
  );
}