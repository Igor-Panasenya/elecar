import React from 'react';
import aboutImage from '../img/about.png';
import {Link} from "react-router-dom";

const About = () => {
    return (
        <section id='About' className="py-20 sm:py-32">
            <div className="container grid grid-cols-1 gap-20 sm:grid-cols-2" >
                <div className='relative' data-aos="fade-down">
                    <img src={aboutImage} alt="about" className='rounded-md'/>
                    <div className='absolute -bottom-11 right-0 bg-[rgba(178,181,183,0.2)] rounded-lg'>
                        <div className='px-8 py-4 w-48'>
                            <p className='text-2xs font-bold text-center'>2.500+</p>
                            <p className='text-xs mt-1 text-black dark:text-secondary text-center'>Supercharges placed along popular routes.</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-start' data-aos="fade-up" >
                    <h2 className='w-52'>Machines With Future Technology</h2>

                    <p className='text-secondaryLight dark:text-secondary text-[12px] my-7 w-72'>See the future with high-performance electric cars produced by
                        renowned brands. They feature futuristic builds and designs with
                        new and innovative platforms that last a long time.
                    </p>

                    <Link to='/know-more' className='border-activeColor border-solid border-[1px] rounded-md px-8 py-3 w-auto hover:bg-activeColor'>
                        Know more
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default About;