import React,{useContext} from 'react';
import DarkContext from "../../Context/darkMode/darkContext";

const Footer = () => {
    const darkContext=useContext(DarkContext)
    const{darkMode}=darkContext
    return (
        <div className={darkMode?"footer-copyright text-center py-3 bg-dark text-light border-top border-light":"footer-copyright text-center py-3 bg-info "}>© {new Date().getFullYear()} Copyright:
             Made with ❤,React & Node by <a href="https://haribhandari.me" className={"text-danger"}> Hari Bhandari</a>
        </div>

    );
};


export default Footer;