import React, {useState, useEffect, useContext} from 'react';
import ExploreButton from '../components/ExploreButton';
import Welcome from '../components/Welcome';
// import {Welcome} from '../components/index';
import "../styles/loading.module.css";
import { exitContext, welcomingContext } from '../utils/context';
import {motion} from "framer-motion";

const Loading = () => {
    //states
    //context
    const {exit , setExit} = useContext(exitContext);
    const {welcoming , setWelcoming} = useContext(welcomingContext);
    //lifecycle management

  return (
    <div className='loading'>
        {welcoming ? <Welcome /> : "" }
        <ExploreButton  />
        <motion.video transition={{ duration: 2, delay: 1.5 }} 
        animate={{ opacity: exit? 1: 0.4 }}
        src={require("../assets/footage-razak.mp4")} 
         autoPlay muted loop >
            <p>Your browser doesn't support this video format...</p>
        </motion.video>
    </div>
  )
}

export default Loading