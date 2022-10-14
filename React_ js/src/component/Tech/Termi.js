import React from 'react';
import '../../App.js';
import './Termi.css';
import 'bootstrap/dist/css/bootstrap.css';
import image4 from'./tech.png';
import { Menu } from '../Routing/menu.js';
export function Termi(){
    return(
        <div className="bcolor">
            <Menu/>
        
            <h1>Learn 4.0 Technologies</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            <div className='container'>

                <div className='row'>
                <div className='col-lg-5 card1 mt-2'>
                    <h1>Data scientist</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <img src={image4} className='scienceimg'/>
                </div>
                <div className='col-lg-5 card1 mt-2'>
                    <h1>Data scientist</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <img src={image4} className='scienceimg'/>
                    </div>
                <div className='col-lg-5 card1 mt-2'>
                    <h1>Data scientist</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <img src={image4} className='scienceimg'/>
                    </div>
                <div className='col-lg-5 card1 mt-2'>
                    <h1>Data scientist</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                    <img src={image4} className='scienceimg'/>
                </div>
                </div>
                </div>
                </div>
                
                
        
                

            
        
        
    
    );
}
