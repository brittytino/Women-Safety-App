import { Fab } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/explorebtn.css";

const MenuButton: React.FC = () => {
    //Navigate
    let navigate = useNavigate();
    const handleClick = () => {
        navigate("/menu")
    }
  return (
    <Fab id="menu-btn" aria-label='menu' onClick={handleClick} >
        <img src={require("../assets/menu-icon.png")} alt="menu-icon" id="menu-btn-icon" />
        <h5>Menu</h5>
    </Fab>
  )
}

export default MenuButton