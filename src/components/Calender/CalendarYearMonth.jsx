import React from 'react';
import Calendar from 'react-calendar';
import './calendarYearMonth.css';
const CalendarYearMonth = ({ onChange, date }) => {
  console.log('2 - calendar');
  return (
    <>
      <div className="react-calendar">
        <Calendar
          maxDetail="year"
          locale="en"
          onChange={onChange}
          defaultActiveStartDate={date}
          value={date}
        />
      </div>
    </>
  );
};

export default CalendarYearMonth;
