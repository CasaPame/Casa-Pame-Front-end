import Header from './Header.jsx'
import Footer from './Footer.jsx'

export default function Layout({ children }) {
  return (
    <div className='layout'>
      <Header />
      <main className="container py-4">{children}</main>
      <Footer />  
    </div>
  )
}

