import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Featured from "./components/Featured";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import MoreFeatures from "./components/MoreFeatures";
import Popular from "./components/Popular";
import Logos from "./components/Logos";

import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from "react";
import ButtonScrollUp from "./components/ButtonScrollUp";

AOS.init({
    duration: 2000,
    dataAosEasing: "ease-in-back",
});

function App() {

    // scroll for background navbar and button scrollUp
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    const [scroll, setScroll] = useState(0);
    const handleScroll = () => {
        setScroll(window.scrollY);
    };

  return (
    <div className="App bg-gray-200 text-black dark:bg-bgColor dark:text-primary transition-bg">
        <Header scroll={scroll} />

        <main>
            <Banner />
            <About />
            <Popular />
            {/*<MoreFeatures />*/}
            <Featured />
            <Offers />
            <Logos />
        </main>

        <Footer />

        <ButtonScrollUp scroll={scroll} />

    </div>
  );
}

export default App;
