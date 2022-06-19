import React from 'react';
import { Link } from "react-router-dom"
import './itemlist.scss';

/*Acá creo mi card ITEM , al cual extraigo las propiedades de la base de datos y
armo la card dinamica */
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