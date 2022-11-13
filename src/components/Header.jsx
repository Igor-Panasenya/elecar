import React, {useState} from 'react';
import {RiSteeringFill} from "react-icons/ri";
import {CgMenuRight} from "react-icons/cg";
import {VscClose} from "react-icons/vsc";

const Header = ({scroll}) => {

    const menu = ['Home', 'About', 'Popular', 'Featured'];
    const [isVisibleMenu, setIsVisibleMenu] = useState(false);

    return (
        <section className={`
        fixed top-0 left-0 z-40 bg-bgColor w-full transition ${scroll > 50 ? 'header-active' : ''}`} >
            <div className="container">
                <nav className='flex justify-between items-center py-4'>
                    <a href="#" className="logo hover:text-activeColor flex items-center gap-2 relative z-50">
                        <RiSteeringFill className='hover:text-activeColor' size={20}/>
                        Elecar
                    </a>

                    <div className={
                        `menu flex flex-col bg-bgColor py-10 px-32 fixed w-[100vw] min-w-fit
                        ${isVisibleMenu ? 'top-12' : '-top-80'} left-[50%] -translate-x-[50%] gap-8
                        sm:flex-row sm:static sm:translate-x-0 sm:w-fit sm:py-2 sm:px-0
                        transition-all duration-150 ease-out`
                    }>
                        {menu.map((menuItem, index) =>
                            <a onClick={() => setIsVisibleMenu(false)}
                               key={menuItem}
                               className='hover:text-activeColor'
                               href={`#${menuItem}`}
                            >
                                {menuItem}
                            </a>
                        )}
                    </div>

                    <button className='text-primary sm:hidden relative z-50 text-primary hover:text-activeColor' onClick={() => setIsVisibleMenu(!isVisibleMenu)}>
                        {isVisibleMenu
                            ?
                            <VscClose size={30} />
                            :
                            <CgMenuRight size={30} />
                        }
                    </button>

                </nav>
            </div>
        </section>
    );
};

export default Header;