import { Link } from 'react-router-dom';
import { useCartContext } from '../Contexto/cartContext';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {faUserXmark} from '@fortawesome/free-solid-svg-icons';

function LoginWidget() {
  const {user} = useCartContext();

  return (
    <>
   { user ? <Link to = '/login'>
    <span><FontAwesomeIcon icon={faUserXmark} 
    className='icon-logo'/>
    </span></Link>
     :
    <Link to='/login'>
    <FontAwesomeIcon icon = {faUser} 
    className='icon-logo'/>
    </Link>  }
    </>
  )
}

export default LoginWidget;