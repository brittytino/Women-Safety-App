import { Box, Button, Collapse, Fab, IconButton, Typography } from '@mui/material';
import React, {useEffect, useState} from 'react';
import "../styles/menu.css";
import menuIconSvg from "../assets/menu-icon.svg";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const Menu = () => {
  const [firstSubmenu, setFirstSubmenu] = useState<boolean>(false)
  const [secondSubmenu, setSecondSubmenu] = useState<boolean>(false)
  const [thirdSubmenu, setThirdSubmenu] = useState<boolean>(false)
  const [fourthSubmenu, setFourthSubmenu] = useState<boolean>(false)

  const imgSources: Array<string> = [require("../assets/img 9.png"), require("../assets/img 8.png"), require("../assets/img 2.png"), require("../assets/img 1.png")]
  const [imgSource, setImgSource] = useState<string>(require("../assets/img 9.png"))

  let navigate = useNavigate()

  useEffect(() => {
    setImgSource(prevImgSource => {
      return imgSources.filter( img => img !== prevImgSource )[0]
    })
    console.log(imgSource);
  }, [firstSubmenu, secondSubmenu, thirdSubmenu, fourthSubmenu])

  return (
    <motion.div id="viewport-menu" 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
        {/* Header */}
        <Box sx={{ display: "flex", width: "100%",
        height: "20%", position: "absolute", top: 0, alignItems: "center",
        justifyContent: "space-between", backgroundColor: "transparent" }}>
          <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
          {/* menu button  */}
          <IconButton id="icon-btn" size="small" onClick={() => {navigate("/newhome")}} ><img src={menuIconSvg} alt="menu-icon" id='menu-icon-svg' /></IconButton>
        </Box>
          {/* Main menu */}
        <Box id="main">
          {/* menu  */}
          <Box id="menu">
            <motion.div whileHover={{ opacity: 1 }} initial={{ opacity: 0, top: 100 }} animate={{ top: 0, opacity: 0.8}} transition= {{ delay: 0.5, duration: 0.5 }} >
              <button id="menu-button" onClick={() => { setFirstSubmenu(firstSubmenu => !firstSubmenu) }} ><Typography variant="h1" fontWeight="bolder" >About Us</Typography></button>
            </motion.div>
            <Collapse in={firstSubmenu} id="collapse" >
              <Typography variant='h3' fontWeight="bold">Submenu</Typography>
            </Collapse>
            <motion.div whileHover={{ opacity: 1 }} initial={{ opacity: 0, top: 10 }} animate={{ top: 0, opacity: 0.8}} transition= {{ delay: 1, duration: 0.5 }}>
              <button id="menu-button" onClick={() => { setSecondSubmenu(secondSubmenu => !secondSubmenu) }} ><Typography variant="h1" fontWeight="bolder" >Product</Typography></button>
            </motion.div>
            <Collapse in={secondSubmenu} id="collapse" >
              <Typography variant='h3' fontWeight="bold">Submenu</Typography>
            </Collapse>
            <motion.div whileHover={{ opacity: 1 }} initial={{ opacity: 0, top: 100 }} animate={{ top: 0, opacity: 0.8}} transition= {{ delay: 1.5, duration: 0.5 }}>
              <button id="menu-button" onClick={() => { setThirdSubmenu(thirdSubmenu => !thirdSubmenu) }} ><Typography variant="h1" fontWeight="bolder" >News & Events</Typography></button>
            </motion.div>
            <Collapse in={thirdSubmenu} id="collapse" >
              <Typography variant='h3' fontWeight="bold">Submenu</Typography>
            </Collapse>
            <motion.div whileHover={{ opacity: 1 }} initial={{ opacity: 0, top: 100 }} animate={{ top: 0, opacity: 0.8}} transition= {{ delay: 2, duration: 0.5 }}>
              <button id="menu-button" onClick={() => { setFourthSubmenu(fourthSubmenu => !fourthSubmenu) }} ><Typography variant="h1" fontWeight="bolder" >Contact Us</Typography></button>
            </motion.div>
            <Collapse in={fourthSubmenu} id="collapse" >
              <Typography variant='h3' fontWeight="bold">Submenu</Typography>
            </Collapse>
          </Box>
          {/* image  */}
          <motion.img src={imgSource} alt="drugs-picture" style={{ width: "20em", marginRight: "5em", height: "25em" }} />
        </Box>
          {/* Footer */}
          <Typography variant="subtitle2" sx={{ marginTop: "2em", marginLeft: "5em", color: "white" }}>
            Sharing is Caring
          </Typography>

    </motion.div>
  )
}

export default Menu