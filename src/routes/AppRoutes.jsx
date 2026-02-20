import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Layout from '../components/Layout.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />

      <Route path="/sobre" element={
        <Layout>
          <About />
        </Layout>
      } />
    </Routes>
  )
}