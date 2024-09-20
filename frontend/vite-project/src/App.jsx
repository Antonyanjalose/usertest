import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegistrationPage from './pages/RegistrationPage';
import LoginPage from './pages/LoginPage';
import CalculationPage from './pages/CalculationPage';
import UsersPage from './pages/UsersPage';
import RoleAssignmentPage from './pages/RoleAssignmentPage';
import MainLayout from './layouts/MainLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<MainLayout />}>
          <Route path="calculate" element={<CalculationPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="assign-role" element={<RoleAssignmentPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
