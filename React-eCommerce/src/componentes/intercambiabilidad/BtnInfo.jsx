import React from 'react'
import { Link } from 'react-router-dom'
import './btnInfo.scss';

const BtnInfo = () => {
  return (
    <div className='container-info-login'>
        <h1 className='title-info'>¡Hola! Por favor, para realizar la compra, primero tenes que registrarte</h1>
        <p className='subtitle-info'>Hacé click en inicio para ir a la sección de login</p>
        <Link to = '../login'>
        <button className='btn-info-login'>Inicio</button>
        </Link>

    </div>
  )
}

export default BtnInfo