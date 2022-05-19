import CartWidget from '../CartWidget/CartWidget'
import  logo from '../../imagenes/logo 112.png'
import './_Estilosnavbar.scss'
import { Link } from 'react-router-dom';

function NavBar (){
 return (
<header>
<nav className="navbar-nav">
    <div className="container-nav">            
        <Link className='container-logo' to='/'>  
            <img className="navbar-logo" src = {logo} alt="#"></img> 
        </Link >
            <i className= "navbar-vinculo">Hetzen Company</i>

        <ul className ="nav-list">
            <Link to='/categoria/sniper'><li className ="nav-item"><i className="nav-link">Terrorista</i></li></Link>
            <Link to='/categoria/rifles'><li className ="nav-item"><i className="nav-link">Policia </i></li></Link>   
            <li className ="nav-item"><i className="nav-link">Comprar</i></li>
            <li className ="nav-item"><CartWidget/></li>
        </ul>   
    </div>
</nav>
</header>
    )}
    
export default NavBar;