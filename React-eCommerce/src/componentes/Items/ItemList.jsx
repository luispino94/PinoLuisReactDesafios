import React from 'react'
import Item from './Item.jsx'
import './itemlist.scss'


const ItemList = ({productos}) => {
  return (
      <div className='item-lista-grid' >
        {productos.map(prod => <Item key={prod.id} name={prod.name}  price={prod.price} skin={prod.skin} stock={prod.stock}/>)}
    </div>
  )
}

export default ItemList