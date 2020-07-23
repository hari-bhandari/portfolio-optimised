import React, {Fragment} from 'react';

import './App.css'
import DarkState from "./Context/darkMode/DarkState";
import ContactState from "./Context/contact/ContactState";
function App() {

    return (
        <DarkState>
            <ContactState>
                <Fragment>
                    asjk
                </Fragment>
            </ContactState>
        </DarkState>
    );
}

export default App;
