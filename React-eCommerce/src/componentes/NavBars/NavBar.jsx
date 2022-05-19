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
            <Link to='/categoria/terrorist'><li className ="nav-item"><i className="nav-link">Terrorist</i></li></Link>
            <Link to='/categoria/counter'><li className ="nav-item"><i className="nav-link">Counter</i></li></Link>   
            <Link to='/categoria/awp'><li className ="nav-item"><i className="nav-link">Awp</i></li></Link>   
            <Link to='/categoria/knife'><li className ="nav-item"><i className="nav-link">Knife</i></li></Link>   
            <li className ="nav-item"><CartWidget/></li>
        </ul>   
    </div>
</nav>
</header>
    )}
    
export default NavBar;