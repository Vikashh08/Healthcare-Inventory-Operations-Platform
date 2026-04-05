import { useState } from 'react';
import './index.css';

// Dashboard components
import Auth from './components/Auth';
import SuperAdminDashboard from './pages/SuperAdminDashboard';
import ProcurementDashboard from './pages/ProcurementDashboard';
import FinanceDashboard from './pages/FinanceDashboard';
import PharmacistDashboard from './pages/PharmacistDashboard';
import WarehouseDashboard from './pages/WarehouseDashboard';

function App() {
  const [user, setUser] = useState(null); // { name, role: 'Super Admin' | 'Branch Pharmacist' | 'Warehouse Supervisor' | 'Procurement Officer' | 'Finance' }

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <Auth onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      {/* Sidebar */}
      <aside className="sidebar glass-panel">
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ color: 'var(--primary)', letterSpacing: '-0.5px' }}>MedAxis</h2>
          <div className="badge badge-primary" style={{ marginTop: '0.2rem' }}>{user.role}</div>
        </div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <div className="btn btn-secondary w-full" style={{ justifyContent: 'flex-start' }}>Dashboard</div>
          <div className="btn btn-secondary w-full" style={{ justifyContent: 'flex-start' }}>Inventory</div>
          <div className="btn btn-secondary w-full" style={{ justifyContent: 'flex-start' }}>Sales & Invoicing</div>
          <div className="btn btn-secondary w-full" style={{ justifyContent: 'flex-start' }}>AI Analytics</div>
        </nav>
        
        <div style={{ marginTop: 'auto' }}>
          <p style={{ fontSize: '0.875rem' }}>{user.name}</p>
          <button className="btn btn-danger w-full mt-4" onClick={handleLogout}>Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="flex justify-between items-center mb-4 glass-card animate-fade-in" style={{ padding: '1rem 1.5rem', marginBottom: '2rem' }}>
          <h2>Welcome back, {user.name}</h2>
          <div className="flex gap-4 items-center">
             <span className="badge badge-success">System Online</span>
             <div className="glass-panel" style={{ padding: '0.5rem 1rem', borderRadius: '1rem', fontSize: '0.875rem' }}>
               18 Warehouses | 42 Retail
             </div>
          </div>
        </header>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
          {user.role === 'Super Admin' && <SuperAdminDashboard />}
          {user.role === 'Procurement Officer' && <ProcurementDashboard />}
          {user.role === 'Finance' && <FinanceDashboard />}
          {user.role === 'Branch Pharmacist' && <PharmacistDashboard />}
          {user.role === 'Warehouse Supervisor' && <WarehouseDashboard />}
        </div>
      </main>
    </div>
  );
}

export default App;
