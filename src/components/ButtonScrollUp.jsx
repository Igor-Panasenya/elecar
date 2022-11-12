import React from 'react';
import {MdOutlineKeyboardArrowUp} from "react-icons/md";

const ButtonScrollUp = ({scroll}) => {
    return (
        <button
            onClick={() => window.scroll(0, 0)}
            className={`fixed bottom-[40px] right-[40px] z-40
            w-[40px] h-[40px]
            flex justify-center items-center
            rounded-xl border-activeColor border-2 border-solid
            hover:bg-activeColor ${scroll > 50 ? 'visible' : 'invisible'}`}
        >
            <MdOutlineKeyboardArrowUp size={30} />
        </button>
    );
};

export default ButtonScrollUp;