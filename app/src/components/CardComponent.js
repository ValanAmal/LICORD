import React from "react";
import Card from "./Card";
import CardContent from "./CardContent";

export default function CardComponent({ title, children }) {
    return (
      <div className="card">
        <h2>{title}</h2>
        {children}
      </div>
    );
  }