import React from 'react';
import {RiSteeringFill} from "react-icons/ri";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";

const Footer = () => {

    const Company = [
        {
            title: 'About',
            link: '#'
        },
        {
            title: 'Cars',
            link: '#'
        },
        {
            title: 'History',
            link: '#'
        },
        {
            title: 'Shop',
            link: '#'
        },
    ]
    const Information = [
        {
            title: 'Request a quote',
            link: '#'
        },
        {
            title: 'Find a dealer',
            link: '#'
        },
        {
            title: 'Contacts us',
            link: '#'
        },
        {
            title: 'Services',
            link: '#'
        },
    ]

    return (
        <footer className="pt-0 sm:pt-16">
            <div className="container flex flex-col sm:flex-row gap-10" data-aos="fade-up">
                <div className='sm:w-[35%]'>
                    <a href="#" className="logo text-2xl hover:text-activeColor flex items-center gap-2">
                        <RiSteeringFill className='hover:text-activeColor' size={40}/>
                        Elecar
                    </a>

                    <p className='text-secondary mt-6'>
                        We offer the best electric cars of <br/>
                        the most recognized brands in <br/>
                        the world.
                    </p>
                </div>
                <div className='sm:w-[20%]'>
                    <h4>Company</h4>

                    <div className='flex flex-col gap-1 mt-6'>
                        {Company.map(company =>
                            <a href={company.link} key={company.title} className='text-secondary hover:text-primary'>
                                {company.title}
                            </a>
                        )}
                    </div>

                </div>
                <div className='sm:w-[20%]'>
                    <h4>Information</h4>

                    <div className='flex flex-col gap-1 mt-6'>
                        {Information.map(info =>
                            <a href={info.link} key={info.title} className='text-secondary hover:text-primary'>
                                {info.title}
                            </a>
                        )}
                    </div>
                </div>
                <div className='sm:w-[20%]'>
                    <h4>Follow us</h4>

                    <div className='flex flex-row gap-6 mt-6 text-secondary'>
                        <a className="hover:text-primary" target="_blank" href="https://www.facebook.com/"><FaFacebookF /></a>
                        <a className="hover:text-primary" target="_blank" href="https://www.instagram.com/"><BsInstagram /></a>
                        <a className="hover:text-primary" target="_blank" href="https://twitter.com/"><FiTwitter /></a>
                    </div>
                </div>
            </div>

                {/*footer developer link*/}
                <p className="flex flex-row justify-center gap-1 text-secondary text-xs mt-16 mb-5">Developer: <a className="font-bold hover:text-activeColor" href="https://portfolio-panasenya-igor.vercel.app/" target='_blank'> &#32; Igor Panasenia</a></p>
        </footer>
    );
};

export default Footer;