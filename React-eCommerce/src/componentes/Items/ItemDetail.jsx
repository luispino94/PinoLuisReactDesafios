import React from 'react'
import ItemCount from './ItemCount';
import './itemlist.scss';


const ItemDetail = ({producto}) => {
  return (
                    /*CARD-DETAIL*/    
     
    <div className='card-grid'> 
        <div className='container-descripcion'>
          <h1 className='container-titulo-detail'>{producto.name}</h1>  
          <p className='container-categoria'>{producto.categoria}</p>
          <span className='container-price-detail'>{`$ ${producto.price}`}</span>
        <ItemCount  stock={5} initial={1} />
        </div>
          
        <div className='container-modelo3d'>
          <div className='iframe-3d' dangerouslySetInnerHTML={{__html:producto.modelo}}></div>
        </div>
                   
    </div>     
        
  )
}

export default ItemDetail