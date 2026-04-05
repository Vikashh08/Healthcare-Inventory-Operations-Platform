export default function PharmacistDashboard() {
  return (
    <div className="glass-card">
      <h2 style={{ color: 'var(--primary)' }}>Retail POS Dashboard</h2>
      <p>Process customer sales, queue offline orders, and view low-stock alerts for this branch.</p>
      <div className="flex gap-4 mt-4">
        <div className="glass-panel" style={{ padding: '1.5rem', flex: 1 }}>
           <h3>New Sale</h3>
           <div className="form-group mt-4">
             <input type="text" placeholder="Scan barcode or type medicine name..." />
           </div>
           <button className="btn btn-primary w-full mt-4">Process Checkout</button>
        </div>
        <div className="glass-panel" style={{ padding: '1.5rem', flex: 1 }}>
           <h3>Offline Queue</h3>
           <p style={{ marginTop: '1rem', color: 'var(--success)' }}>0 transactions pending sync.</p>
        </div>
      </div>
    </div>
  );
}
