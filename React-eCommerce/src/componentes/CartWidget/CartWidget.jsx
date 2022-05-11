import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping} from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <>
    <FontAwesomeIcon icon = {faCartShopping} className='icono-logo' />
    </>
  )
}

export default CartWidget;