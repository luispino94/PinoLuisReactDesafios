import React from 'react';
import ItemCount from './ItemCount.jsx';
import './itemlist.scss';
import { Link } from "react-router-dom"


/*Acá creo mi componente ITEM , al cual extraigo las propiedades de datos,
armo la card dinamica y importo mi ItemCount para pasarle el contador a cada card*/
const Item = ({prod})=> {
 
return (
                    /*CARD*/  

     <div  className='container-items'>
          <Link to={`/detalle/${prod.id}`}>
         <h1 className='container-titulo'>{prod.name}</h1>

         <div className='container-imagen'>
         <img src ={prod.skin} alt="" className='img-item'/> 
         </div>
         <span className='container-price'>{`$ ${price}`}</span>
         <ItemCount  stock={5} initial={1} onAdd={(item)=>alert(`¡Felicidades, agregaste ${item} productos a tu carrito!`)} />
         </Link>
     </div>    
        
    )
}

export default Item