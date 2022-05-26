import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import './itemlist.scss';

        /* COMPONENTE CON CONTADOR  */
const ItemCount = ({ producto, stock, initial, onAdd, handleInputType}) => {

  const [item, setItem] = useState(initial);

  function addItem() {
    if (item < stock) {
      setItem(item + 1);
    }
  }
  function lessItem() {
    if (item > 1) {
      setItem(item - 1);
    }
  }
  function addCarrito() {
    onAdd(item);
    handleInputType();
  }

  return (
       <div className='container-button'>
          <button className='btn-item' onClick={addItem}><FontAwesomeIcon icon={faPlus}/></button>
            <i className='item-count'>{item}</i>
          <button className="btn-item" onClick={lessItem}><FontAwesomeIcon icon={faMinus}/></button>
        
          <button className='btn-item-add' onClick={addCarrito}>Agregar al carrito</button>       
          {/* <Intercambiabilidad/> */}
        </div>

  );
}
export default ItemCount;