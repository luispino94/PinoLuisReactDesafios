import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLightbulb} from '@fortawesome/free-solid-svg-icons'
import './btnInfo.scss';

/*Componente que avisa al usuario que primero para finalizar la compra
tiene que registrarse. Si no, no aparece el formulario.*/

const BtnInfo = () => {
  return (
    <div className='container-info-login'>
        <i><FontAwesomeIcon icon = {faLightbulb} className='icon-logo-info' /></i>
        <h1 className='title-info'>¡Hola! Para realizar la compra, primero tenés que registrarte</h1>
        <p className='subtitle-info'>Hacé click en Registrar para ir a la sección de login</p>
        <Link to = '../login'>
        <button className='btn-info-login'>Registrar</button>
        </Link>
    </div>
  )
}

export default BtnInfo