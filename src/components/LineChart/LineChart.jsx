import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: '1', value: 65 },
  { name: '2', value: 59 },
  { name: '3', value: 80 },
  { name: '4', value: 81 },
  { name: '5', value: 56 },
  { name: '6', value: 95 },
  { name: '7', value: 26 },
  { name: '8', value: 37 },
  { name: '9', value: 59 },
  { name: '10', value: 13 },
  { name: '11', value: 108 },
  { name: '12', value: 79 },


];

const LineChartComponent = () => {
  return (
    <LineChart width={880} height={400} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" dot={false} strokeWidth={3} stroke="url(#lineGradient)" />
      <defs>
        <linearGradient id="lineGradient" gradientTransform="rotate(90)">
          <stop offset="0%" stopColor="#9747FF" />
          <stop offset="100%" stopColor="#14F4C9" />
        </linearGradient>
      </defs>
    </LineChart>
  );
};

export default LineChartComponent;
