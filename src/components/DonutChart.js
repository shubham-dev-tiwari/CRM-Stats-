import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for Donut Chart
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
];

const COLORS = ['#4B0082', '#006400', '#556B2F', '#000001']; // Darker colors for slices

const DonutChartComponent = () => (
  <ResponsiveContainer width="100%" height={300} style={{ backgroundColor: 'white' }}>
    <PieChart>
      <Tooltip contentStyle={{ backgroundColor: 'black', color: 'white' }} />
      <Legend wrapperStyle={{ color: 'black' }} />
      <Pie
        data={data}
        dataKey="value"
        innerRadius={50}  // Added to make it a donut chart
        outerRadius={80}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </ResponsiveContainer>
);

export default DonutChartComponent;
