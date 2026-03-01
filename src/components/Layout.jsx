import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container py-4">{children}</main>
      <Footer />   {/* ← aqui */}
    </div>
  )
}

