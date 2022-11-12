import React from 'react';
import {GiElectric} from "react-icons/gi";
import porscheImage from '../img/home.png';
import {RiTempColdLine} from "react-icons/ri";
import {SlSpeedometer} from "react-icons/sl";
import CountUp from "react-countup";

const Banner = () => {
    return (
        <section id='Home' className="py-16 mt-10 sm:mt-24">
            <div className="container flex flex-col items-center">
                <h1 data-aos="fade-down">Choose The Best Car</h1>
                <p className='font-medium mt-3' data-aos="fade-down" data-aos-delay="300" >Porsche Mission E</p>
                <p className='text-secondary flex items-center gap-1' data-aos="fade-down" data-aos-delay="600" >
                    <GiElectric className='text-activeColor' size={13}/>
                    Electric car
                </p>

                <img src={porscheImage} alt="porsche" className='w-60 mt-6 sm:w-96 sm:mt-16' data-aos="fade-up" data-aos-delay="300"/>

                <div className='flex flex-row gap-10 items-center mt-6 sm:mt-16' data-aos="fade-up" data-aos-delay="600">
                    <div className='flex flex-col items-center'>
                        <RiTempColdLine className='mx-auto' size={20}/>

                        <CountUp start={0} end={24} duration={2.5} delay={0}>
                            {({ countUpRef }) => (
                                <div className='mt-5 text-center text-xl w-[50px]'>
                                    <span className='text-center text-xl' ref={countUpRef} />
                                    °
                                </div>
                            )}
                        </CountUp>

                        <p className='text-center text-[12px] text-secondary mt-1' >TEMPERATURE</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <SlSpeedometer className='mx-auto' size={20}/>

                        <CountUp start={0} end={873} duration={3} delay={0}>
                            {({ countUpRef }) => (
                                <div className='mt-5 text-center text-xl w-[50px]'>
                                    <span className='text-center text-xl' ref={countUpRef} />
                                </div>
                            )}
                        </CountUp>

                        <p className='text-center text-[12px] text-secondary mt-1' >MILEAGE</p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <GiElectric className='mx-auto' size={20}/>

                        <CountUp start={0} end={94} duration={2.8} delay={0}>
                            {({ countUpRef }) => (
                                <div className='mt-5 text-center text-xl w-[50px]'>
                                    <span className='text-center text-xl' ref={countUpRef} />
                                    %
                                </div>
                            )}
                        </CountUp>

                        <p className='text-center text-[12px] text-secondary mt-1' >BATTERY</p>
                    </div>
                </div>

                <a href="#Popular" className='mt-20 shadow-xl hover:shadow-2xl flex items-center justify-center w-28 h-28 border-2 border-solid border-emerald-400 rounded-full' data-aos="fade-up" data-aos-delay="900">
                    <p className='text-2xs flex items-center justify-center w-20 h-20 border-[1px] border-solid border-emerald-400 rounded-full'>
                        START
                    </p>
                </a>
            </div>
        </section>
    );
};

export default Banner;