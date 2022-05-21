import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function CartWidget() {
  return (
    <>
  
    <Link to='/cart'>
    <FontAwesomeIcon icon = {faCartShopping} className='icono-logo' />
    </Link>
    </>
  )
}

export default CartWidget;