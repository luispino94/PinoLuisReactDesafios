import React from 'react';
import ItemCount from './ItemCount.jsx';
import './itemlist.scss';


/*Acá creo mi componente ITEM , al cual extraigo las propiedades de datos,
armo la card dinamica y importo mi ItemCount para pasarle el contador a cada card*/
const Item = ({name,price,skin,id})=> {
 
return (
                    /*CARD*/    
     <div key={id} className='container-items'>
         <h1 className='container-titulo'>{name}</h1>

         <div className='container-imagen'>
         <img src ={skin} alt="" className='img-item'/> 
         </div>
         <span className='container-price'>{`$ ${price}`}</span>
         <ItemCount  stock={5} initial={1} onAdd={(item)=>alert(`¡Felicidades, agregaste ${item} productos a tu carrito!`)} />
     </div>    
        
    )
}

export default Item