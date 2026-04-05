export default function SuperAdminDashboard() {
  return (
    <div className="flex-col gap-6">
      <div className="flex gap-4">
        <div className="glass-card flex-col" style={{ flex: 1 }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Total Revenue (MTD)</h3>
          <p style={{ fontSize: '2rem', color: 'var(--success)', fontWeight: 'bold' }}>$1,245,000</p>
          <div className="badge badge-success mt-4">+12% from last month</div>
        </div>
        <div className="glass-card flex-col" style={{ flex: 1 }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>Active Branches</h3>
          <p style={{ fontSize: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>42 / 42</p>
          <div className="badge badge-primary mt-4">100% Operational</div>
        </div>
        <div className="glass-card flex-col" style={{ flex: 1 }}>
          <h3 style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase' }}>AI Anomaly Alerts</h3>
          <p style={{ fontSize: '2rem', color: 'var(--danger)', fontWeight: 'bold' }}>3</p>
          <div className="badge badge-danger mt-4 pulse-alert">Requires investigation</div>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '2rem', marginTop: '1rem' }}>
        <div className="flex justify-between items-center mb-4">
          <h3>Recent AI Insights</h3>
          <button className="btn btn-secondary">Run Full Analysis</button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Severity</th>
                <th>Type</th>
                <th>Location</th>
                <th>Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="badge badge-danger">High</span></td>
                <td>Suspicious Order Volume</td>
                <td>Retail #14</td>
                <td>Orders for controlled substances spiked by 400% in 2 hours.</td>
                <td><button className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>Review</button></td>
              </tr>
              <tr>
                <td><span className="badge badge-warning">Medium</span></td>
                <td>Impending Expiry</td>
                <td>Warehouse #3</td>
                <td>Batch BX-992 of Amoxicillin will expire in 30 days ($12k value).</td>
                <td><button className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>Review</button></td>
              </tr>
              <tr>
                <td><span className="badge badge-success">Insight</span></td>
                <td>Demand Prediction</td>
                <td>Region B</td>
                <td>Expected 25% increase in Paracetamol demand next week due to seasonal flu.</td>
                <td><button className="btn btn-secondary" style={{ padding: '0.25rem 0.75rem', fontSize: '0.75rem' }}>Apply</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
