import React from 'react';
import '../styles/Components.css';

function SummaryCard({ title, amount, bgColor }) {
  return (
    <div className="summary-card" style={{ backgroundColor: bgColor }}>
      <p className="summary-title">{title}</p>
      <h2 className="summary-amount">${amount}</h2>
    </div>
  );
}

export default SummaryCard;
