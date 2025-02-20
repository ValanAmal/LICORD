import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 text-white p-4">
      <h2 className="text-xl font-bold">Navigation</h2>
      <ul>
        <li className="mt-2">Dashboard</li>
        <li className="mt-2">Courses</li>
        <li className="mt-2">Settings</li>
      </ul>
    </div>
  );
}