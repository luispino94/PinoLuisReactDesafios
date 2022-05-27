import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFetch } from '../../datos/datos.js'
import ItemList from '../Items/ItemList.jsx';
import { LoadingComponent } from '../LoadingComp/LoadingComponent.jsx';


const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)
  const {id} = useParams()
/*Con useEffect + los corchetes hacemos que cargue una sola vez y en segundo plano ( o sea, un array, se ejecuta una sola vez
  )  */ 
  useEffect(() => { 
   if (id){ 
     getFetch ()
     .then (respuesta => setProductos (respuesta.filter((prods) => prods.categoria === id)))
     .catch ((err)=> console.log (err))
     .finally(()=>setLoading (false))
    } else {
      getFetch()
      .then (respuesta =>setProductos(respuesta))
      .catch((err)=> console.log (err))
      .finally(()=> setLoading(false))
    }
  }, [id])
   
console.log (id);
  return (
          /* Acá termino importando todo lo que fui armando en mi item >itemList  */
    
    <div className='item-lista-grid'>
        {loading ? (<LoadingComponent/>) : <ItemList productos={productos}/>}
    </div>
 

  )
}

export default ItemListContainer