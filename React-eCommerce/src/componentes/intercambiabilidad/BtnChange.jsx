import { Link } from 'react-router-dom'

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

