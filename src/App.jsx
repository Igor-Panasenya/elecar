import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect, useState} from "react";
import ButtonScrollUp from "./components/ButtonScrollUp";

import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import Layout from "./components/Layout";
import Header from "./components/Header";

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
          <Routes>
              <Route path="/" element={<Layout />} >
                  <Route index element={<MainPage />} />
                  <Route path="*" element={<NotFoundPage />} />
              </Route>
          </Routes>

          <ButtonScrollUp scroll={scroll} />
      </div>

  );
}

export default App;
