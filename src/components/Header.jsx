import './Header.css'
import logo from "./image/logo.png";

export default function Header() {
  return (
    <header>
      
      <div className='link-header'>

        <div className='link-logo'>
          <img src={logo} alt="Logo Casa Pame" />
          <h1>Casa Pame </h1>
        </div>
          
        <div className='link-filter'>
          <h1>Café</h1>
          <h1>Pratos</h1>
          <h1>Categorias</h1>
        </div>
          
        <div className='link-registro'>
          <h1>Entrar</h1>
          <h1>Registrar</h1>
        </div> 
        

      </div>
    </header>
  )
}