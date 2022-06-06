import './spiner.scss'
import spiner from '../../imagenes/Negro Rojo Videojuegos Ilustración Logo para videojuegos (Logo animado) (Logo).png' 

export function LoadingComponent (){
    return <>
    <div className="spinner">
        <img className='img-spinner' src = {spiner} alt="#"></img>
    </div>
    </>
}