import ItemCount from "../Items/ItemCount"




const ItemListContainer = ({greeting = 'titulo'}) => {


  return (
 
    <div>
      <h1 className="estilos-greetin">{greeting}</h1>
      <ItemCount  stock={5} initial={1} onAdd={(item)=>alert(`¡Felicidades, agregaste ${item} productos a tu carrito!`)} />
    </div>

  )
}

export default ItemListContainer