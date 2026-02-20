import Header from './Header.jsx'

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className="container py-4">{children}</main>
    </div>
  )
}