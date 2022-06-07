import spiner from '../../imagenes/spinner.png';

import './spiner.scss';

export function LoadingComponent (){
    return <>
    <div className="spinner">
        <img className='img-spinner' src = {spiner} alt="#"></img>
    </div>
    </>
}