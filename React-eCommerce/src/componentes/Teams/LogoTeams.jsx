import logolegion from '../../imagenes/clanes/legion.png';
import logodragon from '../../imagenes/clanes/dragon.png';
import logogorilaz from '../../imagenes/clanes/gorilaz.png';
import logospartan from '../../imagenes/clanes/spartan.png';
import logowolf from '../../imagenes/clanes/wolfclan.png'
import logogoat from '../../imagenes/clanes/GOAT.png';

import './logoteams.scss';

export default function LogosTeam (){

    return (
        <div className="container-team">
            <div className='container-title'>
            <h2 className='title-team'>Nuestros Sponsors</h2>
            </div>
            <div className='prueba-container'>     
              <i className='logo-item'><img className='img-logo' src={logolegion}  alt="#"/></i> 
              <i className='logo-item'><img className='img-logo' src={logodragon}  alt="#"/></i> 
              <i className='logo-item'><img className='img-logo' src={logogorilaz} alt="#"/></i> 
              <i className='logo-item'><img className='img-logo' src={logospartan} alt="#"/></i> 
              <i className='logo-item'><img className='img-logo' src={logowolf}    alt="#"/></i> 
              <i className='logo-item'><img className='img-logo' src={logogoat}    alt="#"/></i> 
            </div>
        </div>
    )
}