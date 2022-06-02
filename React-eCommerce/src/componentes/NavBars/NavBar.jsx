import CartWidget from '../CartWidget/CartWidget'
import  logo from '../../imagenes/My project.png'
import './_Estilosnavbar.scss'
import { Link } from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext';

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
            <Link to='/login'><li className ="nav-item"><i className="nav-link">Login</i></li></Link>   
            <li className ="nav-item"><CartWidget/></li>
            <i className='icono-cant'>{cantidadTotal() !== 0 && cantidadTotal()}</i>
            
        </ul>   
    </div>
</nav>
</header>
    )}
    
export default NavBar;