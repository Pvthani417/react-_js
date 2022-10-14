import React from "react";
import './hello.css';
import { Menu } from "../Routing/menu";
export function Hello(){
    return(
        <div>
            <Menu/>
            <h1 className="hwo">Helloworld!</h1>
        </div>
    );
}