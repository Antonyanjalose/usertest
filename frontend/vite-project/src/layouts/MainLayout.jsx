import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './MainLayout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <nav>
          <ul>
            <li><Link to="calculate">Calculation</Link></li>
            <li><Link to="/register">Register</Link></li>
            {JSON.parse(localStorage.getItem('user'))?.role === 'admin' && (
              <>
                <li><Link to="users">Registered Users</Link></li>
                <li><Link to="assign-role">Assign Roles</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <div className="content">
        <Outlet /> 
      </div>
    </div>
  );
};

export default MainLayout;
