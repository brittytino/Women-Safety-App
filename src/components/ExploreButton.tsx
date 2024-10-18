import { Fab } from '@mui/material';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/explorebtn.css";
import {motion} from "framer-motion";
import { exitContext, welcomingContext } from '../utils/context';

const ExploreButton: React.FC = (props: any) => {
  //states
  const {exit , setExit} = useContext(exitContext);
  const {welcoming , setWelcoming} = useContext(welcomingContext);
  
    //Navigate
    let navigate = useNavigate();
    const handleClick = () => {
      if (welcoming) {
        setExit(true) 
        setTimeout(() =>{setWelcoming(false)}, 1500)
        // setWelcoming(false)
        return
      }
      setTimeout(() => {navigate("/newhome")}, 1000)
    }
  return (
    <motion.div drag whileDrag={{ scale: 0.9 }}
    style={{ zIndex: 10, position: "absolute", right: 15, top: -30 }} dragConstraints={{ right: 10, top: 10}} >
      <Fab id="btn" aria-label='explore' onClick={handleClick} >
          <h5>
          Click To Explore
          </h5>
      </Fab>
    </motion.div>
  )
}

export default ExploreButton