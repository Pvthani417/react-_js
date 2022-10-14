import  React from 'react';
import '../../App.js';
import './league.css';
import image2 from './royal.jpeg'
import image3 from'./csk.jpeg';
import { Menu } from '../Routing/menu.js';
export function League()
{
    return(
        <div className='bgcolor'>
            <Menu/>
        
            
            <h1 className="league">Super Over League</h1>
        
            <div className='imgteams'>
                <img src={image2} className="cskimg"/>
                <img src={image3} className="royimg"/>
            </div>
            </div>

    );
}