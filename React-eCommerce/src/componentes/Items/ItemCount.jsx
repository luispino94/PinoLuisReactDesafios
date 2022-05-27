import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import './itemlist.scss';

        /* COMPONENTE CON CONTADOR  */
const ItemCount = ({stock, initial, onAdd, handleInputType}) => {

  const [quantity, setQuantity] = useState(initial);

  function addItem() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }
  function lessItem() {
    if (quantity> 1) {
      setQuantity(quantity- 1);
    }
  }
  function addCarrito() {
    onAdd(quantity);
    handleInputType();
  }

  return (
       <div className='container-button'>
          <button className='btn-item' onClick={addItem}><FontAwesomeIcon icon={faPlus}/></button>
            <i className='item-count'>{quantity}</i>
          <button className="btn-item" onClick={lessItem}><FontAwesomeIcon icon={faMinus}/></button>
        
          <button className='btn-item-add' onClick={addCarrito}>Agregar al carrito</button>       
          {/* <Intercambiabilidad/> */}
        </div>

  );
}
export default ItemCount;