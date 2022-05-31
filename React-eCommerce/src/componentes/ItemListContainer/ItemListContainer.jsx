import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../Items/ItemList.jsx';
import { LoadingComponent } from '../LoadingComp/LoadingComponent.jsx';
import {getFirestore, getDocs, collection} from 'firebase/firestore'

const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState (true)
  const {id} = useParams()
/*Con useEffect + los corchetes hacemos que cargue una sola vez y en segundo plano ( o sea, un array, se ejecuta una sola vez
  )  */ 
   
  useEffect(()=>{
    const db = getFirestore()
    if (id){
      const queryCollection = collection(db, 'items')
      const queryCollectionFilter = query (queryCollection, where('categoria', '===', id))
      getDocs(queryCollectionFilter)
      .then (resp => setProductos(resp.docs.map (items=>({id: items.id, ... items.data()}))))
      .catch((err)=>console.log(err))
      .finally(()=>setLoading(false))
    } else {
      const queryCollection = collection(db, 'items')
      getDocs(queryCollection)
      .then (resp => setProductos(resp.docs.map(item=>({id: item.id, ... item.data()}))))
      .catch((err)=>console.log (err))
      .finally(()=>setLoading(false))
    }
  }, [id])


  return (
          /* Acá termino importando todo lo que fui armando en mi item >itemList  */
    
    <div className='item-lista-grid'>
        {loading ? (<LoadingComponent/>) : <ItemList productos={productos}/>}
    </div>
 

  )
}

export default ItemListContainer