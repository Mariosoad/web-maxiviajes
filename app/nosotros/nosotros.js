import './nosotros.css'
import Image from 'next/image'
import Dropdown from './dropdown'

export default function Nosotros() {
    return (
        <>
            <div id='ayuda-briptravel' className='container-nosotros'>
                <div className='nosotros-tittle-section'>
                    <h2 data-aos="fade-right" data-aos-offset="200" data-aos-easing="ease-in-sine">
                        Descubre el mundo con <span>Briptravel</span>
                    </h2>
                    <p data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">Tenga en cuenta todas nuestras recomendaciones y tips a la hora viajar!</p>
                </div>
                <div className='child-container-nosotros'>
                    <div className='img-preg-frecuentes'>
                        <Image width={350} height={420} src='https://maxiviajes.com.ar/media/img-preg-frecuentes.jpg' />
                    </div>
                    <Dropdown />
                </div>
            </div>
        </>
    )
}
