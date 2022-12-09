import React, {useState} from 'react';
import LuxuryItem from "./LuxuryItem";

const Featured = () => {

    // карточки и состояние карточек
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
    const [luxuryCarsItems, setLuxuryCarsItems] = useState([...luxuryCars])

    // навигация по фильтру
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
    const onClickCarsNav = (index) => {
        setIsActiveNavItem(index)

        if (index === 0) {
            setLuxuryCarsItems(luxuryCars)
        } else {
            setLuxuryCarsItems([...luxuryCars].filter(card => card.carBrand === LuxuryCarsNav[index].title))
        }
    }

    return (
        <section id='Featured' className='text-primary py-20'>
            <div className="container flex flex-col items-center">
                <h3 className="text-black dark:text-primary text-center" data-aos="fade-up">Featured Luxury Cars</h3>

                {/*Featured content*/}
                <div className='flex flex-col items-center gap-10 mt-10'>

                    {/*navbar*/}
                    <div className='flex flex-row gap-5' data-aos="fade-up" data-aos-delay="300">
                        {LuxuryCarsNav.map((LuxuryCarsNavItem, index) =>
                            <button
                                key={LuxuryCarsNavItem.title}
                                className={`${isActiveNavItem === index ? 'active' : ''} w-10 h-10 flex justify-center items-center bg-bgBoxColor hover:bg-activeColor rounded-xl group/navItem`}
                                onClick={() => onClickCarsNav(index)}
                            >
                                <img src={`${LuxuryCarsNavItem.image}`} alt="photo" className='w-[55%] opacity-50 group-hover/navItem:opacity-100'/>

                            </button>
                        )}
                    </div>

                    {/*luxury cars items*/}
                    <div className='card-transition flex w-[98%] flex-col sm:flex-row sm:flex-wrap gap-10 sm:w-[798px]' data-aos="fade-up" data-aos-delay="600">

                        {luxuryCarsItems.map(luxuryCar =>

                            <LuxuryItem key={luxuryCar.id} luxuryCar={luxuryCar} />

                        )}

                    </div>
                </div>

            </div>


        </section>
    );
};

export default Featured;
