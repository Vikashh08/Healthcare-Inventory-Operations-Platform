export default function WarehouseDashboard() {
  return (
    <div className="glass-card">
      <h2 style={{ color: 'var(--warning)' }}>Warehouse Operations</h2>
      <p>Manage incoming shipments, dispatch to retail branches, and conduct stock audits.</p>
      
      <div className="flex gap-4 mt-4">
        <button className="btn btn-primary">Receive Shipment</button>
        <button className="btn btn-secondary">Dispatch Order</button>
        <button className="btn btn-secondary">Start Stock Audit</button>
      </div>
    </div>
  );
}
