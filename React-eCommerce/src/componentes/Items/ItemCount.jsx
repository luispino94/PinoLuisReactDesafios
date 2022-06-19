import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import './itemlist.scss';

/* componente contador que se pasa en Item Detail para que el usuario pueda elegir
   cuantos productos quiere comprar.*/
const ItemCount = ({stock, initial, onAdd, handleInputType}) => {

  const [quantity, setQuantity] = useState(initial);
//Funcion que va sumando de a un producto.
  function addItem() {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  }
//Funcion que va restando de a un producto.
  function lessItem() {
    if (quantity> 1) {
      setQuantity(quantity- 1);
    }
  }

//Funcion que agrega el producto y genera la intercambiabilidad.
  function addCarrito() {
    onAdd(quantity);
    handleInputType();
  }

  return (
       <>
        <div>
          <button className='btn-item' onClick={addItem}><FontAwesomeIcon icon={faPlus}/></button>
            <i className='item-count'>{quantity}</i>
          <button className="btn-item" onClick={lessItem}><FontAwesomeIcon icon={faMinus}/></button>
        </div>
        <div>
          <button className='btn-item-add' onClick={addCarrito}>Agregar al carrito</button>       
       
        </div> 
        </>

  );
}
export default ItemCount;