import React from 'react';
import imageCar from '../img/offer.png';

const Offers = () => {
    return (
        <section className='py-24 bg-[url("img/offer-bg.png")] bg-cover'>
            <div className="container flex flex-col sm:flex-row gap-20">

                {/*content*/}
                <div className='flex flex-col' data-aos="fade-right">
                    <h3>Do You Want To Receive <br /> Special Offers?</h3>

                    <p className='text-secondary text-[12px] xs:w-[50%] w-[100%] my-6 sm:text-[16px] sm:w-96'>
                        Be the first to receive all the information about our
                        products and new cars by email by subscribing to our
                        mailing list.
                    </p>


                    <button className='border-activeColor border-solid border-[1px] rounded-md px-8 py-3 w-[180px] hover:bg-activeColor'>
                        Know more
                    </button>

                </div>

                {/*image*/}
                <img className='w-80 h-auto sm:w-1/2' src={imageCar} alt="car" data-aos="fade-left" />
            </div>
        </section>
    );
};

export default Offers;