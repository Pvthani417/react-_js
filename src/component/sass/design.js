import React from "react";
import af from './sass.png';
export function Design(){
    return(
        <div>
            <div>
                
                <ul className='diplay'>
                    
                    <li>Menu</li>
                    <li>contact</li>
                    <li>About</li>
                    <li>phone number</li>
                    <li>Address</li>
                  
                   
            
                </ul>
                <h1>Sass</h1>
                <p>Sass stands for Syntactically Awesome Stylesheet,Sass is an extension to CSS,Sass is a CSS pre-processor,Sass is completely compatible with all versions of CSS,Sass reduces repetition of CSS and therefore saves time,Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006,Sass is free to download and use
               </p>
               <h2>why use sass</h2>
               <p>Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.

Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.</p>
           <img src={af}/>
            
                
            </div>

        </div>
    );
}
