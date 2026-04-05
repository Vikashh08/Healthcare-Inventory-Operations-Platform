export default function ProcurementDashboard() {
  return (
    <div className="glass-card">
      <h2 style={{ color: 'var(--primary)' }}>Procurement Officer Dashboard</h2>
      <p>Manage supplier orders, monitor warehouse capacities, and view demand forecasts.</p>
      
      <div className="table-container mt-4">
        <table>
          <thead>
            <tr><th>PO Number</th><th>Supplier</th><th>Status</th><th>Est. Delivery</th></tr>
          </thead>
          <tbody>
            <tr><td>PO-10492</td><td>PharmaCorp Inc.</td><td><span className="badge badge-warning">In Transit</span></td><td>Oct 24, 2026</td></tr>
            <tr><td>PO-10493</td><td>MediSupply Ltd.</td><td><span className="badge badge-success">Delivered</span></td><td>Oct 20, 2026</td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
