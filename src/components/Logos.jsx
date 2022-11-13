import React from 'react';

const Logos = () => {

    const logos = [
        {
            title: 'porsche',
            image: 'logo1'
        },
        {
            title: 'audi',
            image: 'logo2'
        },
        {
            title: 'tesla',
            image: 'logo3'
        },
        {
            title: 'lamborghini',
            image: 'logo4'
        },
        {
            title: 'bmw',
            image: 'logo5'
        },
        {
            title: 'mitsubishi',
            image: 'logo6'
        },


    ]

    return (
        <section className='py-20'>
            <div className="container gap-4 text-center grid grid-cols-3 ss:flex ss:justify-between ss:w-[80%] md:w-[65%] md:justify-between md:items-center" data-aos="fade-up">

                {logos.map((logo, index) =>
                    <img
                        key={logo.title}
                        className="invert dark:invert-0 h-6 flex flex-wrap mx-auto ss:w-auto opacity-50 hover:opacity-100 md:h-12"
                        src={`./img/${logo.image}.png`}
                        alt="logo"
                    />
                )}


            </div>
        </section>
    );
};

export default Logos;