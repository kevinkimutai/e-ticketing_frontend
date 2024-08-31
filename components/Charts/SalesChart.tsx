// components/TicketSalesChart.js

"use client";

import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data for ticket sales aggregated by month
const ticketSalesData = [
  { month: "January", sales: 30 },
  { month: "February", sales: 45 },
  { month: "March", sales: 60 },
  { month: "April", sales: 50 },
  { month: "May", sales: 70 },
  { month: "June", sales: 80 },
  { month: "July", sales: 75 },
  { month: "August", sales: 90 },
  { month: "September", sales: 85 },
  { month: "October", sales: 100 },
  { month: "November", sales: 95 },
  { month: "December", sales: 110 },
];

const TicketSalesChart = () => {
  return (
    <div className="w-2/3">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={ticketSalesData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" angle={-45} textAnchor="end" interval={0} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="sales"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TicketSalesChart;
