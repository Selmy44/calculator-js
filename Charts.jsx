import React from 'react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import '../styles/Components.css';

const pieData = [
  { name: 'Rent', value: 500 },
  { name: 'Groceries', value: 300 },
  { name: 'Phone', value: 150 },
  { name: 'Transport', value: 100 },
];

const barData = [
  { month: 'Jan', income: 800, expenses: 600 },
  { month: 'Feb', income: 950, expenses: 700 },
  { month: 'Mar', income: 700, expenses: 750 },
];

const COLORS = ['#1ABC9C', '#E67E22', '#9B59B6', '#E74C3C'];

function Charts() {
  return (
    <div className="charts-container">
      <div className="chart-box">
        <h3>Expenses by Category</h3>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-box">
        <h3>Income vs Expenses</h3>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={barData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="income" fill="#1ABC9C" />
            <Bar dataKey="expenses" fill="#E74C3C" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
