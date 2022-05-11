import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMinus,faPlus } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import './itemcount.scss';

const ItemCount = ({ stock, initial, onAdd }) => {

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
  }

  return (
  <article>
    <div className='container-item'>
      <img className='img-item' src='https://www.theloadout.com/wp-content/uploads/2021/05/best-csgo-skins-neon-rider-ak47.jpeg' alt="" />
      <p className='subtitulo-img'>Aka-47 Daft Punk</p>
        <div className='menu-item'>
          <button className='btn-item' onClick={addItem}><FontAwesomeIcon icon={faPlus}/></button>
            <i className='item-count'>{item}</i>
          <button className="btn-item" onClick={lessItem}><FontAwesomeIcon icon={faMinus}/></button>
        </div>
          <button className='btn-item-add' onClick={addCarrito}>Agregar al carrito</button>
    </div>
  </article>
  );
}
export default ItemCount;