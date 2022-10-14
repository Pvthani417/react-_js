import React from 'react';

import './card.css';
import image from './watch.jpg';
import image1 from './congratsprofile.png';
import { Menu } from '../Routing/menu.js';

export function Congrats(){
    return(
        <div>
            <Menu/>
           
            <div class="bgcontainer">
            <h1 className="contant">Congratulations</h1>
            <div class="color">
                <div >
                <img src={image1} className="image"/>
                <h1>Kiran V</h1>
        </div>
        <div>
        <p>vishnu Institute of computer Education and technology,Bhivasaram</p>
        
        <img src={image} className="watch"/>
           </div>
        
            </div>
            </div>
            </div>

        
        

        
    );
}