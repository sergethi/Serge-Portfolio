import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';



export default function MobileNav() {

    const [open, setOpen] = useState(false);

    return (
        <div className="mob_header">
            {/* <a className='burger-icon'><FaBars onClick={()=> setOpen(!open)}/> </a> */}
            
            
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#project">Projects</a></li>
                <li><a href="#project">Experiences</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            
      </div>
    )
}
