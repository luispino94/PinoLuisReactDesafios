import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemDetail from '../Items/ItemDetail.jsx';
import { LoadingComponent } from '../LoadingComp/LoadingComponent.jsx';

/*Componente donde se genera el detalle para cada item
y por eso se usa el useParams. Para que genere esa ruta en especifico */

const ItemListDetail = () => {
    const [product, setProducts] = useState({})
    const {detailID} = useParams ()
    const [loading, setLoading] = useState (true)
  
    useEffect(()=>{
      const db = getFirestore()
      const dbQuery = doc (db, 'items', detailID) //con "doc" estoy solicitando un solo documento 
      getDoc(dbQuery)
      .then (resp =>setProducts({id: resp.id, ... resp.data()}))
      .catch (err=>console.log (err))
      .finally(()=>setLoading(false))
    },[])

    return (
            /* Acá termino importando todo lo que fui armando en mi item >itemList  */
           <>
            {loading ? (<LoadingComponent/>) :
            <ItemDetail product={product}/>}
          </>
)}

export default ItemListDetail