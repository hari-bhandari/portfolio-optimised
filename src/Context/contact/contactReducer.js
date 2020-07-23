import {
    SEND_CONTACTS,ERROR
} from '../types';
export default (state,action)=>{
    switch (action.type) {
        case SEND_CONTACTS:
            return {
                ...state,
                sent:true
            }
        case ERROR:
            return {
                ...state,
                sent: false,
                error:action.payload
            }
        default:
            return state

    }
}