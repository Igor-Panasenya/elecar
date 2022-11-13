import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import {SlSpeedometer} from "react-icons/sl";
import {RiChargingPile2Line, RiFundsBoxLine} from "react-icons/ri";

const Popular = () => {

    const popularList = [
        {
            id: '1',
            carBrand: 'Porsche',
            model: 'Turbo S',
            features: {
                time: '3.7',
                speed: '356',
                type: 'Electric',
                price: '175.900',
            },
        },
        {
            id: '2',
            carBrand: 'Porsche',
            model: 'Taycan',
            features: {
                time: '3.7',
                speed: '356',
                type: 'Electric',
                price: '114.900',
            },
        },
        {
            id: '3',
            carBrand: 'Porsche',
            model: 'Turbo S Cross',
            features: {
                time: '3.7',
                speed: '356',
                type: 'Electric',
                price: '150.900',
            },
        },
        {
            id: '4',
            carBrand: 'Porsche',
            model: 'Boxster 718',
            features: {
                time: '3.7',
                speed: '356',
                type: 'Electric',
                price: '125.900',
            },
        },
        {
            id: '5',
            carBrand: 'Porsche',
            model: 'Cayman',
            features: {
                time: '3.7',
                speed: '356',
                type: 'Electric',
                price: '128.900',
            },
        },
    ]
    return (
        <section id='Popular' className='mt-0 py-16 sm:mt-10'>
            <div className="container flex flex-col items-center">
                <h3 className="w-56 text-center" data-aos="fade-up">Chose Your Electric Car Of The Porsche Brand</h3>

                <Swiper
                    slidesPerView={1.5}
                    spaceBetween={50}
                    loop={true}
                    grabCursor={true}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 50,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    className="mySwiper w-[100vw] xs:w-[85vw] sm:w-[85vw] mt-16 lg:w-[55vw]"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >

                    {popularList.map(popularItem =>
                        <SwiperSlide key={popularItem.id}>

                            <div className='relative bg-bgBoxColor py-8 px-5 rounded-2xl w-[238px] group/card overflow-hidden'>
                                <h4>{popularItem.carBrand}</h4>
                                <h5 className='text-secondary mt-3' >{popularItem.model}</h5>

                                <img className='w-44 ml-8 my-5 group-hover/card:-translate-y-2' src={`../img/popular${popularItem.id}.png`} alt="popular"/>

                                <div className='grid grid-cols-2 gap-2 my-4'>
                                    <div className='flex flex-row gap-2 items-center w-80'>
                                        <SlSpeedometer />
                                        <span className='text-[12px] flex flex-row'>
                                            {popularItem.features.time} &#x20; Sec
                                        </span>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center w-80'>
                                        <RiFundsBoxLine />
                                        <span className='text-[12px] flex flex-row'>
                                            {popularItem.features.speed} &#x20; Km/h
                                        </span>
                                    </div>
                                    <div className='flex flex-row gap-2 items-center w-80'>
                                        <RiChargingPile2Line />
                                        <span className='text-[12px] flex flex-row'>
                                            {popularItem.features.type}
                                        </span>
                                    </div>
                                </div>

                                <span className='text-[20px]'>${popularItem.features.price}</span>

                            </div>

                        </SwiperSlide>
                    )}

                </Swiper>

            </div>
        </section>
    );
};

export default Popular;