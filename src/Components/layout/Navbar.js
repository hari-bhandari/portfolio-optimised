import React, {useContext, useEffect} from 'react';
import logo from './logo.png'
import DarkModeToggle from "react-dark-mode-toggle";
import './Navbar.css'
import {Link} from 'react-scroll'
import DarkContext from "../../Context/darkMode/darkContext";

const Navbar = () => {
    const darkContext=useContext(DarkContext)
    const{darkMode,setDarkMode}=darkContext
    useEffect(() => {
        if (localStorage.getItem('darkMode')) {
            const dMode = (localStorage.getItem('darkMode') === 'true')
            setDarkMode(dMode)

// eslint-disable-next-line

        }
    }, [])
    const onChange=()=>{
        setDarkMode(!darkMode)
        localStorage.setItem('darkMode',!darkMode)
    }
    return (
            <nav className={darkMode?("navbar navbar-expand-md navbar-light fixed-top py-4 bg-dark"):("navbar navbar-expand-md navbar-light fixed-top py-4 ")} id="main-nav">
                <div className="container">
                    <Link to="home" className="navbar-brand my-0" smooth={true} duration={500}>
                        <img src={logo} width="110" height="80" alt="logo"/>

                    </Link>
                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto " >
                            <li className="nav-item">
                                <Link to="home" className={darkMode?"nav-link text-light":"nav-link"} smooth={true} duration={500}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about-me" className={darkMode?"nav-link text-light":"nav-link"} smooth={true} duration={500}>About me</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="skills" className={darkMode?"nav-link text-light":"nav-link"} smooth={true} duration={500}>Skills</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="projects" className={darkMode?"nav-link text-light":"nav-link"} smooth={true} duration={500}>Projects</Link>
                            </li>
                            <li className="nav-item">
                                <span className={darkMode?"nav-link text-light":"nav-link"} data-toggle="modal" data-target="#contactModal">Contact Us</span>
                            </li>

                            <li className="nav-item">
                                <DarkModeToggle onChange={onChange} checked={darkMode} />
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
    );
};

export default Navbar;