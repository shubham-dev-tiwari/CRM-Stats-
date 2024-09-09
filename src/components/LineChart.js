import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for Line Chart
const data = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4000 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 7000 },
];

// Updated color for the line and other elements
const DARK_LINE_COLOR = '#333366'; // Dark Indigo for the line
const GRID_COLOR = '#CCCCCC'; // Light Grey for grid lines
const AXIS_TEXT_COLOR = '#000000'; // Black for axes text

const LineChartComponent = () => (
  <div style={{ backgroundColor: '#FFFFFF', padding: '20px', borderRadius: '10px' }}>
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={GRID_COLOR} />
        <XAxis dataKey="name" stroke={AXIS_TEXT_COLOR} tick={{ fontSize: 12, fontWeight: 'bold' }} />
        <YAxis stroke={AXIS_TEXT_COLOR} tick={{ fontSize: 12, fontWeight: 'bold' }} />
        <Tooltip
          contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #CCCCCC' }}
          labelStyle={{ color: AXIS_TEXT_COLOR, fontWeight: 'bold' }}
          itemStyle={{ color: AXIS_TEXT_COLOR }}
        />
        <Legend
          wrapperStyle={{ color: AXIS_TEXT_COLOR, fontWeight: 'bold' }}
        />
        <Line type="monotone" dataKey="value" stroke={DARK_LINE_COLOR} activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default LineChartComponent;
