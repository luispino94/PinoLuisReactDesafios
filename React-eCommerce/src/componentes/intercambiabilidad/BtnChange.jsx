import { Link } from 'react-router-dom'

/*Botón que cambia las opciones al apretar terminar compra gracias a la intercambiabilidad que permite React js
 producida en item detail.*/
export default function BtnChange  (){
return(
    <>
        <Link to = '/cart'>
            <button className='btn'>
                Terminar Compra
            </button>
        </Link>
        <Link to='/'>
            <button className='btn'>
                Seguir comprando
            </button>
        </Link>
    </>
    )
}

