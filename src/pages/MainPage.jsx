import React from 'react';
import Banner from "../components/Banner";
import About from "../components/About";
import Popular from "../components/Popular";
import Featured from "../components/Featured";
import Offers from "../components/Offers";
import Logos from "../components/Logos";

const MainPage = () => {
    return (
        <>
            <Banner />
            <About />
            <Popular />
            {/*<MoreFeatures />*/}
            <Featured />
            <Offers />
            <Logos />
        </>
    );
};

export default MainPage;