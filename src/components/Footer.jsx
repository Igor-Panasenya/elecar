import React from 'react';
import {RiSteeringFill} from "react-icons/ri";
import {FaFacebookF} from "react-icons/fa";
import {BsInstagram} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";
import {Link} from "react-router-dom";

const Footer = () => {

    const Company = [
        {
            title: 'About',
            link: '/about'
        },
        {
            title: 'Cars',
            link: '/cars'
        },
        {
            title: 'History',
            link: '/history'
        },
        {
            title: 'Shop',
            link: '/shop'
        },
    ]
    const Information = [
        {
            title: 'Request a quote',
            link: '/request-a-quote'
        },
        {
            title: 'Find a dealer',
            link: '/find-a-dealer'
        },
        {
            title: 'Contacts us',
            link: '/contacts-us'
        },
        {
            title: 'Services',
            link: '/services'
        },
    ]

    return (
        <footer className="pt-0 sm:pt-16 pb-2 w-[100vw]">
            <div className="container flex flex-col sm:flex-row gap-10" data-aos="fade-up">
                <div className='sm:w-[35%]'>
                    <a href="#" className="logo text-2xl hover:text-activeColor flex items-center gap-2">
                        <RiSteeringFill className='hover:text-activeColor' size={40}/>
                        Elecar
                    </a>

                    <p className='text-secondaryLight dark:text-secondary mt-6'>
                        We offer the best electric cars of <br/>
                        the most recognized brands in <br/>
                        the world.
                    </p>
                </div>
                <div className='sm:w-[20%]'>
                    <h4>Company</h4>

                    <div className='flex flex-col gap-1 mt-6'>
                        {Company.map(company =>
                            <Link to={company.link} key={company.title} onClick={() => window.scroll(0,0)} className='text-secondaryLight dark:text-secondary hover:text-black dark:hover:text-primary'>
                                {company.title}
                            </Link>
                        )}
                    </div>

                </div>
                <div className='sm:w-[20%]'>
                    <h4>Information</h4>

                    <div className='flex flex-col gap-1 mt-6'>
                        {Information.map(info =>
                            <Link to={info.link} key={info.title} onClick={() => window.scroll(0,0)} className='text-secondaryLight dark:text-secondary hover:text-black dark:hover:text-primary'>
                                {info.title}
                            </Link>
                        )}
                    </div>
                </div>
                <div className='sm:w-[20%]'>
                    <h4>Follow us</h4>

                    <div className='flex flex-row gap-6 mt-6 text-secondaryLight dark:text-secondary'>
                        <a className="hover:text-black dark:hover:text-primary" target="_blank" href="https://www.facebook.com/"><FaFacebookF /></a>
                        <a className="hover:text-black dark:hover:text-primary" target="_blank" href="https://www.instagram.com/"><BsInstagram /></a>
                        <a className="hover:text-black dark:hover:text-primary" target="_blank" href="https://twitter.com/"><FiTwitter /></a>
                    </div>
                </div>
            </div>

                {/*footer developer link*/}
                <p className="flex flex-row justify-center gap-1 text-secondaryLight dark:text-secondary text-xs mt-16 mb-5">Developer: <a className="font-bold text-black dark:text-secondary hover:text-activeColor dark:hover:text-activeColor" href="https://portfolio-panasenya-igor.vercel.app/" target='_blank'> &#32; Igor Panasenia</a></p>

        </footer>
    );
};

export default Footer;