import { calculateTotal } from 'Hooks/calculateTotal';
import React from 'react';

const ProgressBars = ({ list }) => {
  const bgcolor = 'red';
  const completed = 60;

  const amount = calculateTotal(list);

  const containerStyles = {
    height: 20,
    width: '50vw',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
  };

  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
  };
  return (
    <div className=" d-flex  justify-content-center ">
      <h1>party</h1>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>{`${completed}%`}</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;
