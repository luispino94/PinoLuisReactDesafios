import React from 'react'
import Item from './Item.jsx'
import './itemlist.scss'


const ItemList = ({product}) => {
  return (
    product.map((prod) =>  <Item key={prod.id} prod={prod} />  )
  )
}

export default ItemList