import { Link} from 'react-router-dom';
import './btnStock.scss'

export default function BtnStock (){

    return (
    <>
        <div className='container-stock'>
        <h2 className='titulo-btnStock'>Carrito de compras</h2>
        <p className='subtitulo-stock'>No hay elementos en el carrito</p>
       
        <Link to='/'>
        <button className='btn-Stock'>
            Volver a Inicio
        </button>
        </Link>
        </div>
    </>
    )
}