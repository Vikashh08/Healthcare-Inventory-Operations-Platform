export default function FinanceDashboard() {
  return (
    <div className="glass-card">
      <h2 style={{ color: 'var(--success)' }}>Finance Dashboard</h2>
      <p>View daily sales reconciliation, monitor accounts payable/receivable, and track expenditures.</p>
      
      <div className="flex gap-4 mt-4">
        <div className="glass-panel" style={{ padding: '1.5rem', flex: 1 }}>
          <h3>Daily Reconciliation</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>$42,850.00 / $42,850.00</p>
          <span className="badge badge-success mt-4">Fully Reconciled</span>
        </div>
      </div>
    </div>
  );
}
