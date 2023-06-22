'use client'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';

import { EffectFade } from 'swiper';
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import './hero.css'

const slides = [{
    image: 'https://maxiviajes.com.ar/media/travel-4.jpg',
    tittle: 'Encuentra tu vuelo más barato hoy!'
},{
    image: 'https://maxiviajes.com.ar/media/travel-6.jpg',
    tittle: 'Encuentra tu vuelo más barato hoy 2!'
},{
    image: 'https://maxiviajes.com.ar/media/travel-7.jpg',
    tittle: 'Encuentra tu vuelo más barato hoy 3!'
}]

export default function Hero() {
    return (
        <>
            <Swiper
                slidesPerView={1}
                loop={true}
                // autoplay={{
                //     delay: 4000,
                //     disableOnInteraction: false,
                // }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                effect="fade"
            >
                {slides.map(({image, tittle, index }) => (
                    <SwiperSlide>
                        <div className='brip-hero-gradient'></div>
                        <Image fill className='brip-hero-slide-img' src={image} />
                        <h1 className='brip-hero-tittle'>{tittle}</h1>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}
