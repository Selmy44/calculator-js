import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Components.css';

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar${isOpen ? ' open' : ' closed'}`}>
      <div>
        <div className="sidebar-accounts-header">
          <span className="section-title">MY ACCOUNTS</span>
          <button className="add-account-btn">+</button>
        </div>

        <ul className="sidebar-nav">
          {/* <div className="sidebar-section-header">
            <li className="sidebar-label">All Accounts</li>
          </div> */}

          <li><NavLink to="/" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Dashboard</NavLink></li>
          <li><NavLink to="/transactions" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Transactions</NavLink></li>
          <li><NavLink to="/income" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Income</NavLink></li>
          <li><NavLink to="/expenses" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Expenses</NavLink></li>
          {/* <li><NavLink to="/settings" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Settings</NavLink></li> */}
          <li><NavLink to="/MobileMoney" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Mobile Money</NavLink></li>
          <li><NavLink to="/EquityBank" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Equity Bank</NavLink></li>
          <li><NavLink to="/Cash" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Cash</NavLink></li>
        </ul>

      4  <div className="sidebar-divider" />
        <ul className="sidebar-section-bottom" style={{ marginTop: '2px', marginBottom: '0' }}>
          <li><span className="sidebar-icon">⚙️</span> Preferences <span className="sidebar-arrow">{'›'}</span></li>
          {/* <li><span className="sidebar-icon">👤</span> My profile <span className="sidebar-arrow">{'›'}</span></li> */}
          
          <li>
            <div className="sidebar-logout">
              <NavLink to="/Logout" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Logout</NavLink>
              <span className="logout-icon">
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M13 15l5-5-5-5M18 10H7M7 19a2 2 0 01-2-2V3a2 2 0 012-2h4" stroke="#5F27CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </div>
          </li>

        </ul>
      </div>

      <div className="sidebar-logout">
        <NavLink to="/Logout" className={({ isActive }) => isActive ? 'sidebar-link active' : 'sidebar-link'}>Logout</NavLink>
        <span className="logout-icon">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path d="M13 15l5-5-5-5M18 10H7M7 19a2 2 0 01-2-2V3a2 2 0 012-2h4" stroke="#5F27CD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
