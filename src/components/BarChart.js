import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
];

// Updated colors for darker shades
const DARK_COLORS = {
  bar1: '#333366', // Darker Indigo
  bar2: '#006400', // Dark Green
  grid: '#CCCCCC', // Light Grey for grid lines
  axis: '#000000', // Black for axes text
};

const BarChartComponent = () => (
  <div style={{ backgroundColor: '#FFFFFF', padding: '15px', borderRadius: '10px' ,paddingTop:'50px'}}>
    <ResponsiveContainer width="100%" height={210}> {/* Adjusted height */}
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke={DARK_COLORS.grid} />
        <XAxis dataKey="name" stroke={DARK_COLORS.axis} tick={{ fontSize: 12, fontWeight: 'bold' }} />
        <YAxis stroke={DARK_COLORS.axis} tick={{ fontSize: 12, fontWeight: 'bold' }} />
        <Tooltip
          contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #CCCCCC' }}
          labelStyle={{ color: DARK_COLORS.axis, fontWeight: 'bold' }}
          itemStyle={{ color: DARK_COLORS.axis }}
        />
        <Bar dataKey="pv" fill={DARK_COLORS.bar1} />
        <Bar dataKey="uv" fill={DARK_COLORS.bar2} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default BarChartComponent;
