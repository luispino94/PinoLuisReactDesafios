// import { productList } from '../../datos/datos.js';

const Item = ({name,price,skin, id})=> {
    
    return (
       <section>
               <img className="product-card__image" src={skin} alt="" />
              
              <h3 className="product-card__name">{name}</h3>               
              <span className="product-card__name">${price}</span>
       </section>
    )
}

export default Item