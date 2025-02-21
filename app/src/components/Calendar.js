import React, { useState } from "react";
import "./Calendar.css";

const eventsData = {
  "2025-02-25": [{ title: "Tech Conference", time: "10:00 AM" }],
  "2025-02-28": [{ title: "Project Deadline", time: "5:00 PM" }],
  "2025-03-05": [{ title: "Sports Meet", time: "3:00 PM" }],
};

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(1); 
  const [selectedDate, setSelectedDate] = useState(null);

  const daysInMonth = new Date(2025, currentMonth + 1, 0).getDate();
  const firstDay = new Date(2025, currentMonth, 1).getDay();

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <div>
        <h1 className="title">CALENDAR</h1>
    <div className="calendar-container">
      {/* Calendar Header */}
      <div className="calendar-header">
        <h2>Event Calendar</h2>
      </div>

      {/* Calendar Grid */}
      <div className="calendar-grid">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="calendar-day">{day}</div>
        ))}

        {Array(firstDay).fill(null).map((_, index) => (
          <div key={`empty-${index}`} className="empty"></div>
        ))}

        {[...Array(daysInMonth)].map((_, day) => {
          const dateStr = `2025-${String(currentMonth + 1).padStart(2, "0")}-${String(day + 1).padStart(2, "0")}`;
          return (
            <div
              key={day}
              className={`calendar-date ${eventsData[dateStr] ? "event-day" : ""}`}
              onClick={() => handleDayClick(dateStr)}
            >
              {day + 1}
            </div>
          );
        })}
      </div>

      {/* Event Details Section */}
      <div className="event-details">
        <h3>Events</h3>
        {selectedDate && eventsData[selectedDate] ? (
          eventsData[selectedDate].map((event, index) => (
            <div key={index} className="event-item">
              <p><strong>{event.title}</strong></p>
              <p>{event.time}</p>
            </div>
          ))
        ) : (
          <p>No events on this date</p>
        )}
      </div>
    </div>
    </div>
  );
};

export default Calendar;
