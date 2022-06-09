import { useCartContext } from '../Contexto/cartContext';

import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget/CartWidget'
import LoginWidget from '../login/LoginWidget';
import  logo from '../../imagenes/My project.png'

import './_Estilosnavbar.scss'

function NavBar (){
    const {cantidadTotal} = useCartContext()
 return (
<header>
<nav className="navbar-nav">
    <div className="container-nav">            
        <Link className='container-logo' to='/'>  
            <img className="navbar-logo" src = {logo} alt="#"></img> 
        </Link >
            <i className= "navbar-vinculo">Vulkan</i>
            
        <ul className ="nav-list">
            <Link to='/categoria/terrorist'><li className ="nav-item"><i className="nav-link">Terrorist</i></li></Link>
            <Link to='/categoria/counter'><li className ="nav-item"><i className="nav-link">Counter</i></li></Link>   
            <Link to='/categoria/awp'><li className ="nav-item"><i className="nav-link">Awp</i></li></Link>   
            <Link to='/categoria/knife'><li className ="nav-item"><i className="nav-link">Knife</i></li></Link>           
            <li className ="nav-item"><LoginWidget/></li>
            <li className ="nav-item"><CartWidget/><i className='icon-cant'>{cantidadTotal() !== 0 && cantidadTotal()}</i></li>
            
        </ul>   
    </div>
</nav>
</header>
    )}
    
export default NavBar;