import React, {useReducer} from "react";
import darkContext from './darkContext'
import darkReducer from "./darkReducer";
import {TOGGLE_DARK_MODE} from "../types";
const DarkState=(props)=>{
    const initialState={
        darkMode:false
    }
    const [state, dispatch] = useReducer(darkReducer,initialState);

    const setDarkMode=(mode)=>{
        dispatch({
            type:TOGGLE_DARK_MODE,
            payload:mode
        })
    };
    return (
        <darkContext.Provider value={{
            darkMode:state.darkMode,
            setDarkMode
        }}>
            {props.children}
        </darkContext.Provider>
    )
 }
 export default DarkState