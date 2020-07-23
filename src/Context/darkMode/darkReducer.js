import {TOGGLE_DARK_MODE} from "../types";

export default (state,action)=>{
    switch (action.type) {
        case TOGGLE_DARK_MODE:
            localStorage.setItem('darkMode',action.payload)
            return {
                ...state,
                darkMode: action.payload

            }
        default:
            return{
            ...state}
    }
    }