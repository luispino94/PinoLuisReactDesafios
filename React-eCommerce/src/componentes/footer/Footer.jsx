import logo from '../../imagenes/My project.png';
import csgo from '../../imagenes/csgo.png';

import './footer.scss';
const Footer = () =>{


    return (
        
        <footer className="container-footer">
            <div className="about-us">
                <p className='title-aboutus'>Proyecto E-commerce realizado para el curso de React JS en Coder House</p>
            </div>
            <div className="logo-vulkan">
                <img className='logo-src' src={logo} alt=""/>
            </div>
            <div className='container-csgo'>
                <img className='img-csgo' src={csgo} alt="" srcset="" />             
            </div>
          
            <span className='span-copy'>© Copyright 2022 Vulkan business </span>
        </footer>
    )
}

export default Footer