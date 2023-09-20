// import React, { useState } from 'react';
// import { format, addMonths, subMonths } from 'date-fns';
// import './calendar.css';

// const Calender = () => {
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const handleNextMonth = () => {
//     setCurrentMonth(addMonths(currentMonth, 1));
//   };

//   const handlePrevMonth = () => {
//     setCurrentMonth(subMonths(currentMonth, 1));
//   };
//   return (
//     <div className="d-flex justify-content-between m-3    ">
//       <button className="dateBtn" onClick={handlePrevMonth}>
//         <p>Previous Month</p>
//       </button>
//       <h4>{format(currentMonth, 'MMMM yyyy')}</h4>
//       <button className="dateBtn" onClick={handleNextMonth}>
//         <p> Next Month </p>
//       </button>
//       {/* Calendar grid and categories */}
//     </div>
//   );
// };

// export default Calender;
