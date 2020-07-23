import React, {useReducer} from "react";
import contactContext from "./contactContext";
import contactReducer from "./contactReducer"
import axios from 'axios'
import {
    SEND_CONTACTS, ERROR
} from '../types'


const ContactState = props => {
    const initialState = {
        sent: false,
        contact:null,
        error: null
    }
    const [state, dispatch] = useReducer(contactReducer, initialState);

    const sendContact = async (contact) => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const res = await axios.post('https://peaceful-dawn-57067.herokuapp.com/api/contactme', contact, config);
            console.log(res)
            dispatch({
                type: SEND_CONTACTS,
                payload: res.data
            });
        } catch (err) {
            dispatch({
                type: ERROR,
                payload: err.response.data
            });
        }
    };

    return (
        <contactContext.Provider value={{
            sent: state.sent,
            error: state.error,
            sendContact
        }}>
            {props.children}
        </contactContext.Provider>
    )

}
export default ContactState;