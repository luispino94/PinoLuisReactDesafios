import React from 'react';
import './itemlist.scss';
import { Link } from "react-router-dom"
import { faProductHunt } from '@fortawesome/free-brands-svg-icons';


/*Acá creo mi componente ITEM , al cual extraigo las propiedades de datos,
armo la card dinamica y importo mi ItemCount para pasarle el contador a cada card*/
const Item = ({prod})=> {
 
return (
                    /*CARD*/  

     <div  className='container-items'>
        
         <h1 className='container-titulo'>{prod.name}</h1>

         <div className='container-imagen'>
            <div dangerouslySetInnerHTML={{__html:prod.test}}></div>
         <img src ={prod.skin} alt="" className='img-item'/> 
         </div>
         <div>
         
        
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