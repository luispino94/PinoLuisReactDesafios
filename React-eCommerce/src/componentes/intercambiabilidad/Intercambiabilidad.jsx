import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const BtnComparative = ()=>{
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

const BtnCount = ({addChange})=>{
    return <button onClick={addChange}>
    Agregar al carrito
    </button>
}




const Intercambiabilidad = () => {
    const [buton, setButon] = useState (0)

    const addChange =()=>{
        setButon (1);
    }

  return (
        <div>
            {
                
                buton === 0 ?
                <BtnCount addChange={addChange} /> 
                :
                <BtnComparative/>
            }
        </div>
  )
}

export default Intercambiabilidad