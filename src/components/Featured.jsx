import React, {useState} from 'react';
import {SlSpeedometer} from "react-icons/sl";
import {RiChargingPile2Line, RiFundsBoxLine} from "react-icons/ri";

const Featured = () => {

    const luxuryCars = [
        {
            id: '1',
            carBrand: 'Tesla',
            model: 'Model X',
            image: '../../img/',
            price: '98.900',
        },
        {
            id: '2',
            carBrand: 'Tesla',
            model: 'Model 3',
            image: '../../img/',
            price: '45.900',
        },
        {
            id: '3',
            carBrand: 'Audi',
            model: 'E-tron',
            image: '../../img/',
            price: '175.900',
        },
        {
            id: '4',
            carBrand: 'Porsche',
            model: 'Boxster 987',
            image: '../../img/',
            price: '126.900',
        },
        {
            id: '5',
            carBrand: 'Porsche',
            model: 'Panamera',
            image: '../../img/',
            price: '126.900',
        },
    ]
    const LuxuryCarsNav = [
        {
            title: 'All',
            image: '../../img/All.png',
        },
        {
            title: 'Tesla',
            image: '../img/logo3.png',
        },
        {
            title: 'Audi',
            image: '../img/logo2.png',
        },
        {
            title: 'Porsche',
            image: '../img/logo1.png',
        },
    ]
    const [isActiveNavItem, setIsActiveNavItem] = useState(0)

    return (
        <section id='Featured' className='py-16'>
            <div className="container flex flex-col items-center">
                <h3 className="text-center" data-aos="fade-up">Featured Luxury Cars</h3>

                {/*Featured content*/}
                <div className='flex flex-col items-center gap-10 mt-10'>

                    {/*navbar*/}
                    <div className='flex flex-row gap-5' data-aos="fade-up" data-aos-delay="300">
                        {LuxuryCarsNav.map((LuxuryCarsNavItem, index) =>
                            <button
                                key={LuxuryCarsNavItem.title}
                                className={`${isActiveNavItem === index ? 'active' : ''} w-10 h-10 flex justify-center items-center bg-bgBoxColor hover:bg-activeColor rounded-xl group/navItem`}
                                onClick={() => setIsActiveNavItem(index)}
                            >
                                <img src={`${LuxuryCarsNavItem.image}`} className='w-[55%] opacity-50 group-hover/navItem:opacity-100'/>

                            </button>
                        )}
                    </div>

                    {/*luxury cars items*/}
                    <div className='flex w-[98%] flex-col sm:flex-row sm:flex-wrap gap-10 sm:w-[798px]' data-aos="fade-up" data-aos-delay="600">

                        {luxuryCars.map(luxuryCar =>

                            <div className='relative bg-bgBoxColor py-8 px-5 rounded-2xl w-[238px] group/card overflow-hidden'>
                                <h4>{luxuryCar.carBrand}</h4>
                                <h5 className='text-secondary mt-3' >{luxuryCar.model}</h5>

                                <img className='w-44 ml-8 my-5 group-hover/card:-translate-x-4' src={`../img/popular${luxuryCar.id}.png`} alt="popular"/>

                                <span className='text-[20px]'>${luxuryCar.price}</span>

                                {/*shape*/}
                                <span className='absolute -top-10 -left-10 -z-1 bg-activeColor w-[180px] h-[180px] blur-3xl rounded-3xl opacity-10'></span>
                            </div>

                        )}

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Featured;