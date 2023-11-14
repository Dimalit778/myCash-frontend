import React from 'react';
import TestChart from '../../../components/Charts/TestChart';
import { Chart } from 'chart.js';
import LineChart from '../../../components/Charts/LineChart';
import { UpdateUser } from './UpdateUser';

const Settings = () => {
  return (
    <div>
      <h1>Settings</h1>
      <UpdateUser />
    </div>
  );
};

export default Settings;
