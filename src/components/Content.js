import React, { useState } from 'react';
import BarChartComponent from './BarChart';
import PieChartComponent from './PieChart';
import LineChartComponent from './LineChart';
import DonutChartComponent from './DonutChart';
import OverviewCard from './OverviewCard';
import TimeSelector from './TimeSelector';
import { AiOutlineArrowUp, AiOutlineArrowDown, AiOutlineDollarCircle } from 'react-icons/ai';
import { FiTrendingUp, FiTrendingDown } from 'react-icons/fi';

// Sample data for different time windows
const dataByTime = {
  'Last Week': {
    income: 8500,
    expenses: 3200,
    investments: 4200,
    donations: 700,
  },
  'Last Month': {
    income: 12547,
    expenses: 4320,
    investments: 6250,
    donations: 1500,
  },
  'Last Year': {
    income: 150000,
    expenses: 58000,
    investments: 75000,
    donations: 23000,
  },
};

const Content = () => {
  const [selectedTime, setSelectedTime] = useState('Last Month');

  const data = dataByTime[selectedTime]; // Get data based on selected time window

  return (
    <div className="min-h-screen p-6">
      {/* Time Selector */}
      <TimeSelector selectedTime={selectedTime} setSelectedTime={setSelectedTime} />

      {/* Overview Cards with Responsive Design */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-4">
        <OverviewCard
          title="Income"
          value={`$${data.income.toLocaleString()}`}
          description={`Income in the ${selectedTime}`}
          percentageChange="12.5%"
          icon={<AiOutlineDollarCircle className="text-3xl" />}
          color="bg-gradient-to-br from-blue-900 to-blue-700"
        />
        <OverviewCard
          title="Expenses"
          value={`$${data.expenses.toLocaleString()}`}
          description={`Expenses in the ${selectedTime}`}
          percentageChange="-5.2%"
          icon={<FiTrendingDown className="text-3xl" />}
          color="bg-gradient-to-br from-red-900 to-red-700"
        />
        <OverviewCard
          title="Investments"
          value={`$${data.investments.toLocaleString()}`}
          description={`Investments in the ${selectedTime}`}
          percentageChange="8.0%"
          icon={<FiTrendingUp className="text-3xl" />}
          color="bg-gradient-to-br from-purple-900 to-purple-700"
        />
        <OverviewCard
          title="Donations"
          value={`$${data.donations.toLocaleString()}`}
          description={`Donations in the ${selectedTime}`}
          percentageChange="-2.0%"
          icon={<AiOutlineArrowDown className="text-3xl" />}
          color="bg-gradient-to-br from-orange-900 to-orange-700"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white shadow-md p-6 rounded-lg">
          <BarChartComponent selectedTime={selectedTime} />
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <PieChartComponent selectedTime={selectedTime} />
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <LineChartComponent selectedTime={selectedTime} />
        </div>
        <div className="bg-white shadow-md p-6 rounded-lg">
          <DonutChartComponent selectedTime={selectedTime} />
        </div>
      </div>
    </div>
  );
};

export default Content;
