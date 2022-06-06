import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
// import BtnLogOut from '../intercambiabilidad/BtnLogOut';
// import { useCartContext } from '../Contexto/cartContext';





function LoginWidget() {

  return (
    <>
    <Link to='/login'>
    <FontAwesomeIcon icon = {faUser} className='icono-logo' />
    </Link> 
    </>
  )
}

export default LoginWidget;