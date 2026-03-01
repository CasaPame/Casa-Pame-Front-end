import './Home.css'
import nuvemIcon from "./image/nuvem-icon.png"

export default function Home() {
  return (
    <div className="home">
      <div className="hero">
        <div className='Container'>
          <h1>O sabor autêntico <br />
              do preparo lento.</h1>
          <p>Pães de fermentação natural, brunchs inesquecíveis e o melhor café<br /> 
            da região. Sinta-se em casa na Casa Pame.</p>
          <div>
            <button>Ver Cardapio</button>
            <button id='button-2'>Nossa Historia</button>
          </div>
        </div>
      </div>

      <div className='espect-descrição'>
        <div>
          <img src={nuvemIcon} alt="icone-de-nuvem" />
          <h1>Fermentação Natural</h1>
          <p> <span id='span-paes'>Pães</span> produzidos diariamente com fermento natural (levain) e longos períodos de maturação.</p>
        </div>
      </div>

      <div className='favoritos'>
        <div>
          <h1>Favoritos da Casa</h1>

          <p> <span id='span-descrição'>Uma</span> 
          seleção cuidadosa do que nossos clientes mais <br />
          amam em nosso menu diário. </p>

        </div>

        <div className='cards'>
          <div className='card1'>
            <h1>ola</h1>
          </div>

          <div>ola1</div>
        </div>

      </div>

      
    </div>
  )
}