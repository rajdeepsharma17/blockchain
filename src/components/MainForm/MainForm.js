import React from 'react';
import Tilt from 'react-tilt';
import axe from '../../assets/axe.svg';
import './MainForm.css';

const MainForm = () => {
    return (
        <div className="shadow-3 white pa3 ma2 card f1 w-40" >
            <div  >
                {'BlockChain' }
            </div>
            <Tilt className="Tilt" options={{ max: 55 }} style={{ height: 250, width: 250 }} >
                <div className="Tilt-inner shadow-3 ma3">
                    <img src= {axe} alt="axe" /> 
                </div>
            </Tilt>
        </div>
    );
}

export default MainForm;