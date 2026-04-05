import { useState } from 'react';
import Register from './Register';

function Auth({ onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('Super Admin');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call for login
    setTimeout(() => {
      onLogin({ name: username || 'Test User', role });
      setLoading(false);
    }, 1000);
  };

  if (!isLogin) {
    return <Register onSwitchToLogin={() => setIsLogin(true)} onRegister={onLogin} />;
  }

  return (
    <div className="flex justify-center items-center w-full" style={{ height: '100vh' }}>
      <div className="glass-card animate-fade-in" style={{ width: '400px', padding: '2.5rem' }}>
        <h2 className="text-center" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Welcome Back</h2>
        <p className="text-center" style={{ marginBottom: '2rem' }}>Please sign in to continue to MedAxis</p>
        
        <form onSubmit={handleSubmit} className="flex-col gap-4">
          <div className="form-group">
            <label>What is your username?</label>
            <input 
              type="text" 
              placeholder="Please enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="form-group">
            <label>What is your password?</label>
            <input 
              type="password" 
              placeholder="Please enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Which role are you signing in as?</label>
            <select 
              value={role} 
              onChange={(e) => setRole(e.target.value)}
              style={{ width: '100%', cursor: 'pointer' }}
            >
              <option value="Super Admin">Super Admin</option>
              <option value="Branch Pharmacist">Branch Pharmacist</option>
              <option value="Warehouse Supervisor">Warehouse Supervisor</option>
              <option value="Procurement Officer">Procurement Officer</option>
              <option value="Finance">Finance</option>
            </select>
          </div>
          
          <button type="submit" className="btn btn-primary w-full mt-2" disabled={loading}>
            {loading ? 'Signing you in...' : 'Sign in to my account'}
          </button>

          <p className="text-center" style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
            Don't have an account yet? <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '500' }} onClick={() => setIsLogin(false)}>Let's get you set up</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Auth;
