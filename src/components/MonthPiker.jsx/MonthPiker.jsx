import React, { useState } from 'react';

import moment from 'moment';

const MonthPiker = () => {
  // const [currentDate, setCurrentDate] = useState(new Date());
  const [selected, setSelected] = useState(null);
  const presets = [
    {
      title: 'This month',
      start: moment().startOf('month').toDate(),
      end: moment().endOf('month').toDate(),
    },
  ];

  return (
    <div>
      <h1>month</h1>
      {/* <MonthPicker
        presets={presets}
        highlightCol="#24b364"
        closeDelay={500}
        onChange={(d) => setSelected(d)}
      />
      {selected !== null ? (
        <p>
          Start: {moment(selected[0]).format('D MMM YYYY')} <br />
          End: {moment(selected[1]).format('D MMM YYYY')}
        </p>
      ) : null} */}
    </div>
  );
};

export default MonthPiker;

// <div>
// <p>
//   {currentDate.toLocaleString('default', {
//     month: 'numeric',
//   })}
// </p>
// </div>
// <button
// onClick={() =>
//   setCurrentDate(
//     new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
//   )
// }
// >
// Previous Month
// </button>
// <button
// onClick={() =>
//   setCurrentDate(
//     new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
//   )
// }
// >
// Next Month
// </button>
