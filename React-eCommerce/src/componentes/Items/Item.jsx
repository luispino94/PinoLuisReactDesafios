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
        
         <h1 className='container-titulo'>{prod.name}</h1>

         <div className='container-imagen'>
         <img src ={prod.skin} alt="" className='img-item'/> 
         </div>
        <Link to={`/detalle/${prod.id}`}>
        <button>
            <p className='detalle-item'>Ver Detalle</p>
        </button>
         </Link>
     </div>    
        
    )
}

export default Item