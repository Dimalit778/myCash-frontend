import React from 'react';
import Calendar from 'react-calendar';
import './calendarYearMonth.css';

const CalendarYearMonth = ({ onChange, date }) => {
  return (
    <>
      <div className="react-calendar">
        <Calendar
          maxDetail="year"
          minDetail="year"
          locale="en"
          onChange={onChange}
          defaultActiveStartDate={date}
          value={date}
          prev2Label={null}
          next2Label={null}
        />
      </div>
    </>
  );
};

export default CalendarYearMonth;
