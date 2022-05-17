import React from 'react'
import ItemCount from './ItemCount';
import './itemlist.scss';


const ItemDetail = ({producto}) => {
  return (
                    /*CARD*/    
     
      <div className='card-grid'> 
            <div className='container-box-img'>
            <img src ={producto.skin} width="80px"/>
            <img src ={producto.skin}  width="80px"/>
            <img src ={producto.skin}  width="80px"/>

            </div>
           <div className='container-imagen-detail'>
          <img src ={producto.skin} alt="" className='img-item-detail'/> 
           </div>

           <div className='container-descripcion'>
           <h1 className='container-titulo-detail'>{producto.name}</h1>  
           <p className='container-categoria'>{producto.categoria}</p>
           <span className='container-price-detail'>{`$ ${producto.price}`}</span>
           <ItemCount  stock={5} initial={1} onAdd={(item)=>alert(`¡Felicidades, agregaste ${item} productos a tu carrito!`)} />
           </div>
         </div>     
        
  )
}

export default ItemDetail