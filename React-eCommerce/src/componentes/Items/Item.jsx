import { useState, useEffect } from 'react';
import { productList } from '../../datos/datos.js';
import './itemlist.scss'

const getFetch = new Promise ((resolve)=>{
    setTimeout(() => {
        
        resolve (productList);
    }, 4000);
})


const Item = ()=> {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState (true)

  /*Con useEffect + los corchetes hacemos que cargue una sola vez y en segundo plano ( o sea, un array, se ejecuta una sola vez
    )  */ 
    useEffect(() => { 
       getFetch 
       .then (respuesta => setProductos (respuesta))
       .catch ((err)=> console.log (err))
       .finally(()=>setLoading (false)) 
     }, []); /*Los corchetes van acá*/ 
    


    return (
       <section>
           { loading ?
           <h2>cargando...</h2>
           :
           productos.map((prod)=>
                                    <div key={prod.id} className='container-items'>
                                        <div className='container-titulo'>
                                        {`${prod.name}`}
                                        </div>
                                        <div className='container-imagen'>
                                        <img src ={prod.skin} alt=""  className='img-item'/> 
                                        </div>
                                        <div className='container-button'>
                                        <button className='btn-button-item'>
                                            detalle del producto
                                        </button>
                                        </div>
                                    </div>    
                             )
        }
       </section>
    )
}

export default Item