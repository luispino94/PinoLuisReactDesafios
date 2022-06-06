import { Link } from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext';
import CartWidget from '../CartWidget/CartWidget'
import LoginWidget from '../login/LoginWidget';
import  logo from '../../imagenes/My project.png'
import './_Estilosnavbar.scss'
import BtnLogOut from '../intercambiabilidad/BtnLogOut';

function NavBar (){
    const {cantidadTotal, user} = useCartContext()
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
            <li className ="nav-item">{user ? (<LoginWidget/>):(<BtnLogOut/>)}</li>
            <li className ="nav-item"><CartWidget/></li>
            <i className='icono-cant'>{cantidadTotal() !== 0 && cantidadTotal()}</i>
        </ul>   
    </div>
</nav>
</header>
    )}
    
export default NavBar;