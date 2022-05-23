
import { Link } from 'react-router-dom'

export default function BtnChange  (){
return(
    <>
        <Link to = '/cart'>
            <button className='btn' 
             onClick={()=>console.log('terminar compra') }  >
                Terminar Compra
            </button>
        </Link>
        <Link to='/'>
            <button className='btn' 
             onClick={()=>console.log('Seguir comprando') } >
                Seguir comprando
            </button>
        </Link>
    </>
    )
}

