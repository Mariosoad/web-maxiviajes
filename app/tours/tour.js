'use client'

import React, { useEffect, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';
import "./tour.css";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';

const slides = [{
    image: 'https://maxiviajes.com.ar/media/travel-4.jpg',
    tittle: 'Encuentra tu vuelo más barato hoy!'
}, {
    image: 'https://maxiviajes.com.ar/media/travel-6.jpg',
    tittle: 'Encuentra tu vuelo más barato hoy 2!'
}, {
    image: 'https://maxiviajes.com.ar/media/travel-7.jpg',
    tittle: 'Encuentra tu vuelo más barato hoy 3!'
}]

export default function Tour() {

    const [countryData, setCountryData] = useState(null);
    const [imageData, setImageData] = useState(null);

    const countriesSelected = ['Argentina', 'Peru', 'Bolivia', 'Chile', 'Colombia', 'Uruguay', 'Mexico', 'Paraguay', 'Brasil', 'United States', 'France', 'Italy', 'Russia', 'Germany', 'England', 'Scotland', 'China', 'Japan'];

    useEffect(() => {
        // Obtener información del país desde la API de REST Countries
        fetch("https://restcountries.com/v3.1/all")
            .then(response => response.json())
            .then(data => {
                const filteredCountries = data.filter(country => countriesSelected.includes(country.name.common));
                setCountryData(filteredCountries);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    console.log(countryData)

    useEffect(() => {

        // Buscar imágenes de la capital en la API de Unsplash
        fetch(`https://api.unsplash.com/search/photos?query=${`Peru`}&client_id=_Q5-Eko5fvRZ3poT_RakSm4v6Y9aJ7dYdKEntv0E7P8`)
            .then(response => response.json())
            .then(unsplashData => {
                // Almacenar los datos de las imágenes en el estado
                setImageData(unsplashData.results[0]);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    // useEffect(() => {
    //     // Obtener información del país desde la API de REST Countries
    //     fetch(`https://restcountries.com/v3/name/${encodeURIComponent(countryName)}?fullText=true`)
    //         .then(response => response.json())
    //         .then(data => {
    //             // Almacenar los datos del país en el estado
    //             setCountryData(data[0]);

    //             // Obtener el nombre de la capital del país
    //             const capital = data[0].capital[0];

    //             // Buscar imágenes de la capital en la API de Unsplash
    //             fetch(`https://api.unsplash.com/search/photos?query=${encodeURIComponent(capital)}&client_id=_Q5-Eko5fvRZ3poT_RakSm4v6Y9aJ7dYdKEntv0E7P8`)
    //                 .then(response => response.json())
    //                 .then(unsplashData => {
    //                     // Almacenar los datos de las imágenes en el estado
    //                     setImageData(unsplashData.results[0]);
    //                 })
    //                 .catch(error => {
    //                     console.log(error);
    //                 });
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }, [countryName]);

    const slides = [{
        image: 'https://maxiviajes.com.ar/media/travel-4.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-6.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy 2!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-7.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy 3!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-4.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-6.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy 2!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-7.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy 3!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-4.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-6.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy 2!'
    }, {
        image: 'https://maxiviajes.com.ar/media/travel-7.jpg',
        tittle: 'Encuentra tu vuelo más barato hoy 3!'
    }]

    return (
        <div className='container-section-tour'>
            <div className='child-container-section-tour'>
                <div className='container-tittle-tour'>
                    <h2> Sumérgete en la cultura y la <span>aventura</span> </h2>
                    <p>Descubre el verdadero espíritu de cada destino a través de nuestros tours inolvidables.</p>
                </div>
                <div className='container-slide-tour'>
                    <Swiper
                        className='swiper'
                        spaceBetween={40}
                        loop={true}
                        breakpoints={{
                            10: {
                                slidesPerView: 1,
                            },
                            512: {
                                slidesPerView: 1.5,
                            },
                            768: {
                                slidesPerView: 2.5,
                            },
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                    >
                        {slides.map(({ image, tittle, index }) => (
                            <SwiperSlide>
                                <Image width={1600} height={800} quality={100} className='brip-image-tour' src={image} />
                                {/* <h1 className='brip-tour-tittle'>{tittle}</h1> */}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}
