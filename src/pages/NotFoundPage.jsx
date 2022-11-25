import React from 'react';
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className='mt-16 mb-[116px]'>
            <div className="container">
                <h1 className='pt-20'> Hello!</h1>
                <p className='mt-6 text-2xl w-[50%]'>
                    This page does not exist or is under development (which is unlikely 😊),
                    as this site was created only to demonstrate the developer's capabilities.

                    <br /><br />

                    I suggest you go back to the main page and enjoy everything I've created.
                </p>

                <Link to='/' className='border-[1px] border-activeColor border-solid rounded-md hover:bg-activeColor px-8 py-4 mt-10 flex flex-row w-fit'>
                    👉 Go Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;