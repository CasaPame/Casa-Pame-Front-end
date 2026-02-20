import { Link } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes'

export default function App() {
  return (
    <div style={{ padding: 16 }}>
      <nav style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
      </nav>

      <AppRoutes />
    </div>
  )
}