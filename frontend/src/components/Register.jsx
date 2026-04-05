import { useState } from 'react';

function Register({ onSwitchToLogin, onRegister }) {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    password: '',
    role: 'Branch Pharmacist',
    branch: 'Branch 1 (Downtown)'
  });
  const [loading, setLoading] = useState(false);

  const roles = [
    { id: 'Super Admin', desc: 'Full system access & security monitoring' },
    { id: 'Branch Pharmacist', desc: 'Manage local POS & offline queues' },
    { id: 'Warehouse Supervisor', desc: 'Dispatch & manage inventory batches' },
    { id: 'Procurement Officer', desc: 'Supplier orders & forecasting' },
    { id: 'Finance', desc: 'Reconciliation & reporting' },
  ];

  const handleRoleSelect = (roleId) => {
    setFormData({ ...formData, role: roleId });
  };

  const getPasswordStrength = () => {
    const len = formData.password.length;
    if (len === 0) return { width: '0%', color: 'transparent' };
    if (len < 5) return { width: '33%', color: 'var(--danger)' };
    if (len < 8) return { width: '66%', color: 'var(--warning)' };
    return { width: '100%', color: 'var(--success)' };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      onRegister({ name: formData.fullName || formData.username, role: formData.role });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="flex justify-center items-center w-full" style={{ minHeight: '100vh', padding: '2rem 0' }}>
      <div className="glass-card animate-fade-in" style={{ width: '650px', padding: '2.5rem' }}>
        <h2 className="text-center" style={{ color: 'var(--primary)', marginBottom: '0.5rem' }}>Welcome to MedAxis</h2>
        <p className="text-center" style={{ marginBottom: '2rem' }}>Let's get your account set up</p>
        
        <form onSubmit={handleSubmit} className="flex-col gap-4">
          <div className="flex gap-4">
            <div className="form-group" style={{ flex: 1 }}>
              <label>What is your full name?</label>
              <input 
                type="text" 
                placeholder="Please enter your full name" 
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                required
              />
            </div>
            <div className="form-group" style={{ flex: 1 }}>
              <label>Choose a username</label>
              <input 
                type="text" 
                placeholder="e.g. john.doe" 
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
                required
              />
            </div>
          </div>
          
          <div className="form-group">
            <label>Create a password</label>
            <input 
              type="password" 
              placeholder="Please enter a strong password" 
              value={formData.password}
              onChange={(e) => setFormData({...formData, password: e.target.value})}
              required
            />
            {/* Password Strength Meter */}
            <div style={{ height: '4px', background: 'var(--border-color)', borderRadius: '2px', marginTop: '0.5rem', overflow: 'hidden' }}>
               <div style={{ 
                 height: '100%', 
                 width: getPasswordStrength().width, 
                 background: getPasswordStrength().color,
                 transition: 'all 0.3s ease'
               }} />
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '0.5rem' }}>
            <label>Which role will you have?</label>
            <select 
              value={formData.role} 
              onChange={(e) => setFormData({...formData, role: e.target.value})}
              style={{ width: '100%', cursor: 'pointer' }}
            >
              {roles.map(r => (
                <option key={r.id} value={r.id}>{r.id} - {r.desc}</option>
              ))}
            </select>
          </div>

          {formData.role === 'Branch Pharmacist' && (
            <div className="form-group animate-fade-in" style={{ marginTop: '0.25rem' }}>
              <label>Which branch will you be working at?</label>
              <select 
                value={formData.branch} 
                onChange={(e) => setFormData({...formData, branch: e.target.value})}
                style={{ width: '100%', cursor: 'pointer' }}
              >
                <option value="Branch 1 (Downtown)">Branch 1 (Downtown)</option>
                <option value="Branch 2 (Uptown Clinic)">Branch 2 (Uptown Clinic)</option>
                <option value="Retail Pharmacy #42">Retail Pharmacy #42</option>
              </select>
            </div>
          )}
          
          <button type="submit" className="btn btn-primary w-full mt-2" disabled={loading}>
            {loading ? 'Creating your account...' : 'Create my account'}
          </button>
          
          <p className="text-center" style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
            Already have an account? <span style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: '500' }} onClick={onSwitchToLogin}>Please sign in</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
