import './Footer.css'
import logoPame from "./image/logo.png";

export default function Footer() {
  return (
    <footer>
      <div className='container-content'>

        <div className='footer-Logo'>

          <div className='footer-row'>
            <img src={logoPame} alt="logoPame" />
            <h1>Casa Pame</h1>
          </div>

          <h2>Padaria artesanal dedicada à arte da
            panificação e momentos especiais de 
            café da manhã e brunch.</h2>
        </div>
        
        <div className='footer-central'>
          <h1>Horários</h1>
          
          <div className='horarios'>
            <div>
              <p>Seg a Sex:</p>
              <p>Sab e Dom:</p>
              <p>Feriados:</p>
            </div>

            <div>
              <p>06:00 - 20:00</p>
              <p>06:00 - 17:00</p>
              <p>06:00 - 17:00</p>
            </div>
          </div>

        </div>
          

        <div className='footer-loc'>
          <h1>Onde estamos</h1>
          <h2>Rua Oswaldo Casimiro Muller, 76
            Cidade Monções, São Paulo - SP
            CEP 04571-030</h2>
        </div>
      </div>
    </footer>
  )
}
