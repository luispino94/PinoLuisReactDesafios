import CartWidget from '../CartWidget/CartWidget'
import  logo from '../../imagenes/logo 112.png'
import './_Estilosnavbar.scss'

function NavBar (){
 return (
<header>
    <nav className="navbar-nav">
        <div className="container-nav">            
            <img className="navbar-logo" src = {logo} alt="#"></img>
            <a className= "navbar-vinculo" href="#">Hetzen Company</a>           
            <ul className ="nav-list">
                <li className ="nav-item"><a className="nav-link" href='#'>Tienda</a></li>
                <li className ="nav-item"><a className="nav-link" href='#'>Skins </a></li>
                <li className ="nav-item"><a className="nav-link" href='#'>Comprar</a></li>
            <CartWidget/>
            </ul>   
        </div>
    </nav>
</header>
    )}
    
export default NavBar;