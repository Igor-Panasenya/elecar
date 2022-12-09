import React, {useState} from 'react';
import {useRect} from "react-use-rect";

const LuxuryItem = ({luxuryCar}) => {

    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const handleMove = (e) => {
        setMouseX(e.clientX)
        setMouseY(e.clientY)
    }
    const [rect, setRect] = useState(null);
    const [rectRef] = useRect(setRect);

    return (
        <div
            onMouseMove={e => handleMove(e)}
            ref={rectRef}
            className='car-card relative bg-bgBoxColor py-8 px-5 rounded-2xl w-[238px] group/card overflow-hidden z-10'
            data-aos="fade-left"
        >
            <h4 className='relative z-10'>{luxuryCar.carBrand}</h4>
            <h5 className='relative text-secondary mt-3 z-10' >{luxuryCar.model}</h5>

            <img className='relative w-44 ml-8 my-5 group-hover/card:-translate-x-4 z-10' src={`../img/popular${luxuryCar.id}.png`} alt="popular"/>

            <span className='relative text-[20px] z-10'>${luxuryCar.price}</span>

            {rect &&
                <div className={`
                                 absolute
                                 w-[250px] h-[250px] z-40
                                 rounded-full
                                 blur-3xl
                                 bg-activeColor
                                 opacity-[.15]
                                 z-0`}
                     style={{top: `${mouseY - rect.top - 125}px`, left: `${mouseX - rect.left - 125}px`}}
                >
                </div>
            }

        </div>
    );
};

export default LuxuryItem;