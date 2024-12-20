import React, { useState } from "react";
import { Link } from "react-router-dom";
import './style.scss';
import {HiX} from 'react-icons/hi'
import { FaBars, FaSomeIcon } from 'react-icons/fa';
const data=[
    {
        label:'HOME',
        to:'/'
    },
    {
        label:'ABOUT ME',
        to:'/About'
    },
    {
        label:'WORK EXPERINCE',
        to:'/Work'
    },
    {
        label:'PROJECTS',
        to:'/Projects'
    },
    {
        label:'CERTIFICATIONS',
        to:'/Certifications'
    }

]

const Navbar = () => {
const[toggleIcon,setToggleIcon]=useState(false);
    const handletoggleicon =()=>{
        setToggleIcon(!toggleIcon);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={"/"} className="navbar__container__logo">
                        <p>VARSITH REDDY LEGALA</p>
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>{item.label}</Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="nav-icon" onClick={handletoggleicon}>
                    {
                        toggleIcon ?<HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
