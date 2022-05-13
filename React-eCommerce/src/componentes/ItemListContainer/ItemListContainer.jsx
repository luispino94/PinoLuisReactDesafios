import React from 'react';
import { useState, useEffect } from 'react';
import { productList } from '../../datos/datos.js';
import ItemList from '../Items/ItemList.jsx';


const getFetch = new Promise((resolve) => {
  setTimeout(() => {
    resolve(productList);
  }, 2000);
});

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)

/*Con useEffect + los corchetes hacemos que cargue una sola vez y en segundo plano ( o sea, un array, se ejecuta una sola vez
  )  */ 
  useEffect(() => { 
     getFetch 
     .then (respuesta => setProductos (respuesta))
     .catch ((err)=> console.log (err))
     .finally(()=>setLoading (false)) 
   }, []); 

  return (
          /* Acá termino importando todo lo que fui armando en mi item >itemList  */
    <section>
    <div>
        {loading ? (<h2>Cargando...</h2>) : <ItemList productos={productList}/>}
    </div>
  </section>  

  )
}

export default ItemListContainer