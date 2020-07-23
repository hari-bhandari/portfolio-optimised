import React, {Fragment} from 'react';

import Navbar from "./Components/layout/Navbar";
import './App.css'
import './bootstrap.css'
import DarkState from "./Context/darkMode/DarkState";
import Footer from "./Components/layout/Footer";
import ContactState from "./Context/contact/ContactState";
function App() {

    return (
        <DarkState>
            <ContactState>
                <Fragment>
                    <Navbar/>
                    <Footer />
                </Fragment>
            </ContactState>
        </DarkState>
    );
}

export default App;
