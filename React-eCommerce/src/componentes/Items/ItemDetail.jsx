import React from 'react'

const ItemDetail = ({producto}) => {
  return (
                    /*CARD*/    
     <div className='container-items'>
         <h1 className='container-titulo'>{producto.name}</h1>
         <h2 className='container-titulo'>{producto.categoria}</h2>
         <div className='container-imagen'>
         <img src ={producto.skin} alt="" className='img-item'/> 
         </div>
         <span className='container-price'>{`$ ${producto.price}`}</span>
         <ItemCount  stock={5} initial={1} onAdd={(item)=>alert(`¡Felicidades, agregaste ${item} productos a tu carrito!`)} />
     </div>    
  )
}

export default ItemDetail