import { Button, IconButton, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useRef } from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/home.css";
import {motion } from "framer-motion";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "../styles/newhome.css";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


const NewHome = () => {
    //refs
    const carousel = useRef(null)
  return (
    <motion.div className='parent'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }} >
        {/* 1st viewport */}
        <motion.div className="viewport" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            {/* Header */}
        <div className="header">
            <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
            <div style={{ marginRight: "4em", display: "flex", alignItems: "center",
            gap: "2em" }}>
                <Typography variant='subtitle1' >English</Typography>
                <motion.div  whileTap={{ scale: 0.8 }} whileHover={{ scale:1.1 }}><MenuButton /></motion.div>
            </div>
        </div>
          {/* Main */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "3%" }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }} style={{ width: "36rem", position: "relative", fontSize: "larger" }} >
              <Typography variant='h2' fontWeight="bold" >Razak<br /> Pharmacy</Typography>
              <Typography variant="body1" >with more than half a century of<br /> experience</Typography>
              <motion.div whileHover={{  opacity: 0.6 }} ><IconButton aria-label="more" sx={{ color: "white", border: "2px solid white", position: "absolute", right: 200, bottom: -10 }} ><KeyboardArrowRightIcon fontSize='large' /></IconButton></motion.div>
            </motion.div>
          </Box>
          {/* Footer */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "5%", gap: 1 }} >
          <motion.div whileHover={{  opacity: 0.3, cursor: "pointer" }}><img src={require("../assets/whatsapp.png")} alt="whatsapp" id="social-media" /></motion.div>
          <motion.div whileHover={{  opacity: 0.3, cursor: "pointer" }}><img src={require("../assets/instagram.png")} alt="instagram" id="social-media" /></motion.div>
          <motion.div whileHover={{  opacity: 0.3, cursor: "pointer" }}><img src={require("../assets/linkedin-in.png")} alt="linkedin" id="social-media" /></motion.div>
          </Box>
        </motion.div>
        {/* 2nd viewport  */}
        <motion.div className="viewport">
        <Box sx={{ display: "flex", gap: "20em" }} >
          <Box >
            <Typography variant='overline' >About Razak</Typography>
            <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}>
              <Typography variant="h3" fontWeight="bold" fontSize="32px" >Razak Pharmacy<br /> With more than half a <br /> century of epxerience &<br /> best quality</Typography>
            </motion.div>
            {/* footer */}
            <Box sx={{ color: "darkblue", position: "relative", marginTop: 10 }}>
              <Typography variant="subtitle2">Click and Learn more</Typography> <IconButton aria-label="more" sx={{ color: "black", border: "2px solid black", position: "absolute", left: 180, bottom: -10 }} ><KeyboardArrowRightIcon fontSize='small' /></IconButton>
            </Box>
          </Box>
          <Box sx={{ marginTop: 3 }}>
            <motion.div initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 0.5 }}
            whileInView={{ opacity: 1, y: 0 }}>
              <Typography sx={{ lineHeight: 2 }} variant="body1" >Razak laboratories Pharmaceutical joint<br /> stock company started it's actvity
              in 1343 <br /> Hijri (1964 AD) under the name of Pfizer <br/> Laboratories 
              joint stock company under<br/> the ownership of Pfizer America. </Typography>
            </motion.div>
            {/* footer */}
            <Box sx={{ marginTop: 5 }}>
              <Button variant="outlined" sx={{ borderRadius: 5, marginRight: 1 }} >Product</Button>
              <Button variant="outlined" sx={{ borderRadius: 5 }} >Contact</Button>
            </Box>
          </Box>
        </Box>
        </motion.div>
        {/* 3rd viewport  */}
        <motion.div className="viewport">
            <div className="blue"></div>
            <Box sx={{ display: "flex", flexDirection: "column",
            gap: 5, alignItems: "left", marginLeft: "8em", marginTop: "8em" }} >
            <motion.div initial={{ width: 0 }} whileInView={{ width: 900 }} 
             id="hr" transition={{ duration: 0.5, delay: 0.5 }} style={{ width: 0 }} />
            <motion.div initial={{ opacity: 0, y: 10 }} transition={{ duration: 0.5, delay: 1 }}
            whileInView={{ opacity: 1, y: 0 }}>
                <Typography variant="overline" >Blogs</Typography>
                <Typography variant="h5" fontWeight="bold">News and Events</Typography>
            </motion.div>
            {/* slider */}
            <motion.div className='carousel' ref={carousel}>
                <motion.div drag="x" dragConstraints={{ right: 100, left: -200 }} className='inner-carousel' whileDrag={{ cursor: "grabbing" }} >
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 1.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 2.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 3.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 4.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 8.png")} alt="drug-picture" />
                    <motion.img whileHover={{ scale: 1.2 }} className="slider-item" src={require("../assets/img 9.png")} alt="drug-picture" />
                </motion.div>
            </motion.div>
            </Box>
        </motion.div>
        {/* 4th viewport  */}
        <motion.div className="viewport" initial={{ zoom: 1 }} exit={{ zoom: 1 }}
        whileInView={{ zoom: 1.1 }} transition={{ delay: 1, duration: 1 }}>
            <Box sx={{ padding: "0 8em", display: "flex", marginTop: "10%" }}>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1 }} style={{ width: "36rem", position: "relative", fontSize: "larger" }} >
                <Typography variant="body1" >Case Studies</Typography>
                <Typography variant='h3' fontWeight="bold" >Razak's Case Studies</Typography>
                <Typography variant="body1" sx={{ marginTop: 6 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                Donec rutrum congue leo eget malesuada. <br/>
                Proin eget tortor risus. Pellentesque in ipsum<br/>
                id orci porta dapibus. Vivamus magna justo, lacinia<br/>
                eget consectetur sed, convallis at tellus.</Typography>
                <motion.div whileHover={{  opacity: 0.6 }} ><IconButton aria-label="more" sx={{ color: "white", border: "2px solid white", position: "absolute", right: 100, bottom: -50 }} ><KeyboardArrowRightIcon fontSize='large' /></IconButton></motion.div>
                </motion.div>
          </Box>
        </motion.div>
        {/* 5th viewport  */}
        <motion.div className="viewport">
            <Box sx={{ display: "grid", placeItems: "center", height: "100%" }}>
                <Box  >
                    <Typography sx={{ textAlign: "center" }} variant="h1" fontSize="200px" fontWeight="bolder" >DON'T <motion.img src={require("../assets/img 7.png")} alt="drugs"
                    initial={{ width: 0, height: 150 }} whileInView={{ width: 150 }} 
                    transition={{ delay: 1, duration: 1 }} id="drugs-pics" />YOU
                    <br/> FOLLOW <motion.img src={require("../assets/img 6.png")} alt="drugs" 
                    initial={{ width: 0, height: 150 }} whileInView={{ width: 150 }}
                    id="drugs-pics"
                    transition={{ delay: 1, duration: 1 }} />US? </Typography>
                </Box>
                <Box sx={{ position: "absolute", bottom: 50 }}>
                    <Typography variant="subtitle2" >Follow our instagram </Typography><IconButton aria-label="more" size='small' sx={{ color: "black", border: "2px solid black", position: "absolute", right: -50, bottom: -7.5 }} ><KeyboardArrowRightIcon fontSize='small' /></IconButton>
                </Box>
            </Box>
        </motion.div>
        {/* 6th viewport  */}
        <motion.div className="viewport">
            <Box sx={{ display: "flex", marginTop: "10em", justifyContent: "space-evenly" }} >
                <Box>
                    <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ transform: "translate(-50px, -50px)" }} />
                    <Typography>Pharmaceutical Company</Typography>
                </Box>
                <Box>
                    <Typography fontWeight="bold" fontSize="small" variant="subtitle1" sx={{ marginBottom: 10 }} >Learn</Typography>
                    <Typography variant="h6">About Razak</Typography>
                    <Typography variant="h6">Responsibility</Typography>
                    <Typography variant="h6">Gallery</Typography>
                </Box>
                <Box>
                    <Typography fontWeight="bold" fontSize="small" variant="subtitle1" sx={{ marginBottom: 10 }} >Explore</Typography>
                    <Typography variant="h6">Blog Studios</Typography>
                    <Typography variant="h6">Products</Typography>
                </Box>
                <Box>
                    <Typography fontWeight="bold" fontSize="small" variant="subtitle1" sx={{ marginBottom: 10 }} >Collaborate</Typography>
                    <Typography variant="h6">Contact</Typography>
                    <Typography variant="h6">Become a<br/> colleague</Typography>
                    <Typography variant="h6">Complaint</Typography>
                </Box>
                <Box>
                    <Typography fontWeight="bold" fontSize="small" variant="subtitle1" sx={{ marginBottom: 10 }} >Connect</Typography>
                    <Typography variant="h6">021-2153567</Typography>
                    <Typography variant="h6">info@fake.com</Typography>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1, marginTop: 5 }}>
                        <motion.div whileHover={{  opacity: 0.3, cursor: "pointer" }}><img src={require("../assets/whatsapp.png")} alt="whatsapp" id="social-media" /></motion.div>
                        <motion.div whileHover={{  opacity: 0.3, cursor: "pointer" }}><img src={require("../assets/instagram.png")} alt="instagram" id="social-media" /></motion.div>
                        <motion.div whileHover={{  opacity: 0.3, cursor: "pointer" }}><img src={require("../assets/linkedin-in.png")} alt="linkedin" id="social-media" /></motion.div>
                    </Box>
                </Box>


            </Box>
            <Box sx={{ position: "absolute", bottom: 200 , left: 50 }}>
            @2021 Razak Pharmacy. All rights reserved.
            </Box>
        </motion.div>
    </motion.div>
  )
}

export default NewHome