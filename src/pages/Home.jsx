export default function Home() {
  return (
    <div className="container py-4">
      <div className="p-4 bg-white border rounded" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-sm)' }}>
        <h2 className="mb-2">Home</h2>
        <p className="text-muted">Bootstrap + tokens do Figma</p>
        <button className="btn btn-primary">Continuar</button>
      </div>
    </div>
  )
}