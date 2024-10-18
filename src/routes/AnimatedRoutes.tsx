import React from 'react'

import Home from '../routes/Home';
import Loading from '../routes/Loading';
import { Route, Routes, useLocation} from "react-router-dom";
import Menu from '../routes/Menu';
import ExploreButton from '../components/ExploreButton';
import NewHome from '../routes/NewHome';

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/home' element={<Home />} />
            <Route path='/newhome' element={<NewHome />} />
            <Route path='/' element={<Loading />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/explorebutton' element={<ExploreButton />} />
        </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes