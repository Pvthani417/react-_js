import React from "react";
import '../../App.js';
import './menu.css';
import {Link} from "react-router-dom"
export function Menu(){
    return(
        <div className="mainmenu">
            <ul className="menu">

                <Link to="/hello"><li>Helloworld</li></Link>
                <Link to="/card"><li>card</li></Link>
                <Link to="/league"><li>League</li></Link>
                <Link to="/termi"><li>Tech</li></Link>
            </ul>
        </div>
    );
}