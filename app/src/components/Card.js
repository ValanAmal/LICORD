import React from "react";
export default function Card({ children }) {
    return (
      <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
        {children}
      </div>
    );
  }
  
