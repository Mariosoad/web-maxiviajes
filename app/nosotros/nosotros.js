import './nosotros.css'
import Image from 'next/image'
import Dropdown from './dropdown'

export default function Nosotros() {
    return (
        <>
            <div id='ayuda-briptravel' className='container-nosotros'>
                <div className='nosotros-tittle-section'>
                    <h2 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        Vive tus sueños de <span>viaje</span>
                    </h2>
                    <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Descubre el verdadero espíritu de cada destino a través de nuestros tours inolvidables. </p>
                </div>
                <div className='child-container-nosotros'>
                    <div className='img-preg-frecuentes'>
                        <Image width={850} height={420} src='https://maxiviajes.com.ar/media/caminando-airport.jpg' />
                    </div>
                    <Dropdown />
                </div>
            </div>
        </>
    )
}
