import { useState } from 'react';
import { useCartContext } from '../Contexto/cartContext';
import BtnChange from '../intercambiabilidad/BtnChange';
import ItemCount from './ItemCount';
import './itemlist.scss';


const ItemDetail = ({product}) => {
  const {addToCart} = useCartContext();
  const [inputType, setInputType] = useState('itemCount');
  

  function handleInputType() {
    setInputType('BtnChange');
}
const onadd =(quantity) => {
  addToCart({...product, quantity})
}

  return (
                    /*CARD-DETAIL*/    
     
    <div className='card-grid'> 
        <div className='container-descripcion'>
          <h1 className='container-titulo-detail'>{product.name}</h1>  
          <p className='container-categoria'>{product.categoria}</p>
          <p className='descripcion-item'>{product.descripcion}</p>
          <span className='container-price-detail'>{`$ ${product.price}`}</span>  
 
          { inputType ===  'itemCount'?
        <ItemCount  stock={10} initial={1} onAdd={onadd} handleInputType={handleInputType} />:
        <BtnChange/>
        }

        </div>
        <div className='container-modelo3d'>
          <div className='iframe-3d' dangerouslySetInnerHTML={{__html:product.modelo}}></div>
        </div>
                   
    </div>     
        
  )
}

export default ItemDetail