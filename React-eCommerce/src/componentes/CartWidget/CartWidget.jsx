import { Link } from 'react-router-dom';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  //Icono del carrito en el navbar.
  return (
    <>
    <Link to='/cart'>
    <FontAwesomeIcon icon = {faCartShopping} className='icon-logo' />
    </Link>
    </>
  )
}

export default CartWidget;