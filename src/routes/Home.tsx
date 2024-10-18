import { Button, IconButton, Link } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import MenuButton from '../components/MenuButton';
import "../styles/home.css";
import {motion } from "framer-motion";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


const Home = () => {
  return (
    <div className='home' >
      {/* 1s viwport */}
      <motion.div  id="viewport" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        {/* Header */}
        <Box sx={{ display: "flex", width: "100%",
        height: "25%", position: "absolute", top: 0, alignItems: "center",
        justifyContent: "space-between", backgroundColor: "transparent" }}>
          <img id="logo" src={require("../assets/white-logo.png")} alt="logo" style={{ marginLeft: "4em" }} />
          <Box sx={{ display: "flex", alignItems: "center", gap: 5, marginRight: "4em" }}>
            <h3>English</h3>
            <MenuButton />
          </Box>
        </Box>
          {/* Main */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "15%" }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }} style={{ width: "36rem", position: "relative", fontSize: "larger" }} >
              <h1>Razak Pharmacy</h1>
              <h3>with more than half a century of<br /> experience</h3>
              <IconButton aria-label="more" sx={{ color: "white", border: "2px solid white", position: "absolute", right: 100, bottom: -10 }} ><KeyboardArrowRightIcon fontSize='large' /></IconButton>
            </motion.div>
            <img src="" alt="" />
          </Box>
          {/* Footer */}
          <Box sx={{ padding: "0 8em", display: "flex", marginTop: "5%", gap: 1 }} >
          <img src={require("../assets/whatsapp.png")} alt="whatsapp" id="social-media" />
          <img src={require("../assets/instagram.png")} alt="instagram" id="social-media" />
          <img src={require("../assets/linkedin-in.png")} alt="linkedin" id="social-media" />
          </Box>

      </motion.div>

      {/* 2nd viewport */}
      <motion.div id="viewport" style={{ color: "black" }} >
        <Box sx={{ display: "flex", gap: "5em" }} >
          <Box id="text-box">
            <Box>About Razak</Box>
            <Box>
              With more than half a century of epxerience and best quality
            </Box>
            {/* footer */}
            <Box>
              Click and Learn more #icon
            </Box>
          </Box>
          <Box id="text-box">
            <Box>
              Razak laboratories Pharmaceutical joint stock company started it's actvity
              in 1343 Hijri (1964 AD) under the name of Pfizer Laboratories 
              joint stock company under the ownership of Pfizer America. 
            </Box>
            {/* footer */}
            <Box>
              <Button >Product</Button>
              <Button >Contact</Button>
            </Box>
          </Box>
        </Box>
      </motion.div>

      {/* 3rd viewport */}
      <motion.div id="viewport" style={{ position: "relative" }}>
        <div className="blue"></div>
        <Box sx={{ display: "flex", flexDirection: "column",
         gap: 5, alignItems: "left", marginLeft: "8em", marginTop: "8em" }} >
          <div id="hr" />
          <Box>
            <Box>Blogs</Box>
            <Box>News and Events</Box>
          </Box>
          {/* slider */}

        </Box>
      </motion.div>

      {/* 4th viewport  */}
      <motion.div id="viewport" >

      </motion.div>

      {/* 5th viewport  */}
      <motion.div id="viewport" style={{ display: "grid", placeItems: "center" }} >
        <Box>
          <Box>
            Don't<img src="" alt="" /> you follow<img src="" alt="" /> us?
          </Box>
          <Box>
            Follow our instagram 
          </Box>
        </Box>
      </motion.div>

      {/* 6th viewport  */}
      <motion.div id="viewport" style={{ display: "grid", placeItems: "center" }}>
        <Box sx={{ display: "flex" }} >

        </Box>
        <Box>
          @2021 Razak Pharmacy. All rights reserved.
        </Box>
      </motion.div>
      
    </div>
  )
}

export default Home