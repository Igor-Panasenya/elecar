import React, {useState} from 'react';
import {RiSteeringFill} from "react-icons/ri";
import {CgMenuRight} from "react-icons/cg";

const Header = ({scroll}) => {

    const menu = ['Home', 'About', 'Popular', 'Featured'];
    const [isActiveMenuItem, setIsActiveMenuItem] = useState(0);

    return (
        <section className={`
        fixed top-0 left-0 z-40 bg-bgColor w-full transition ${scroll > 50 ? 'header-active' : ''}`} >
            <div className="container">
                <nav className='flex justify-between items-center py-4'>
                    <a href="#" className="logo hover:text-activeColor flex items-center gap-2">
                        <RiSteeringFill className='hover:text-activeColor' size={20}/>
                        Elecar
                    </a>

                    <div className="menu flex flex-col fixed -top-60 left-[50%] -translate-x-[50%] gap-8 sm:flex-row sm:relative sm:top-0 sm:left-0">
                        {menu.map((menuItem, index) =>
                            <a onClick={() => setIsActiveMenuItem(index)} key={menuItem} className={`hover:text-activeColor ${isActiveMenuItem === index ? 'active' : ''}`} href={`#${menuItem}`}>
                                {menuItem}
                            </a>
                        )}
                    </div>

                    <CgMenuRight className="sm:hidden" size={30}/>
                </nav>
            </div>
        </section>
    );
};

export default Header;