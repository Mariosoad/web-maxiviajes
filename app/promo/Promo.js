
import Link from 'next/link'
import Image from 'next/image'
import './promo.css'

export default function Promo() {

    return (
        <>
            <div id='promociones-briptravel' className='container-promo'>
                <div className='container-banners'>
                    <div className='promo-tittle-section'>
                        <h2>Descubre el mundo a tu medida</h2>
                        <p>Explora nuevos horizontes y despierta tus sentidos. Desde playas paradisíacas 
                            hasta selvas exuberantes y ciudades vibrantes, Maxi Viajes te lleva a lugares 
                            llenos de magia y encanto, donde cada paso es una aventura.</p>
                    </div>
                    <div className='child-container-promo'>
                        <Link href="#" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                            <Image width={400} height={220} className='brip-promo-img' src='https://maxiviajes.com.ar/media/promo-brip-1.jpg' />
                        </Link>
                        <Link href="#" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
                            <Image width={400} height={220} className='brip-promo-img' src='https://maxiviajes.com.ar/media/promo-brip-1.jpg' />
                        </Link>
                        <Link href="#" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                            <Image width={400} height={220} className='brip-promo-img' src='https://maxiviajes.com.ar/media/promo-brip-1.jpg' />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
