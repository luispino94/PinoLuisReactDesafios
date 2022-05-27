import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {getFetch} from '../../datos/datos.js'
import ItemDetail from '../Items/ItemDetail.jsx';
import { LoadingComponent } from '../LoadingComp/LoadingComponent.jsx';


const ItemListDetail = () => {
    const [producto, setProductos] = useState({})
    const {detalleId} = useParams ()
    const [loading, setLoading] = useState (true)
  
  /*Con useEffect + los corchetes hacemos que cargue una sola vez y en segundo plano ( o sea, un array, se ejecuta una sola vez
    )  */ 
    useEffect(() => { 
       getFetch (detalleId) 
       .then (respuesta => setProductos (respuesta))
       .catch ((err)=> console.log (err))
      .finally(()=> setLoading(false))
     }, []); 
 
    return (
            /* Acá termino importando todo lo que fui armando en mi item >itemList  */
           <>
            {loading ? (<LoadingComponent/>) :
          <ItemDetail producto={producto}/>}
          </>
)}

export default ItemListDetail