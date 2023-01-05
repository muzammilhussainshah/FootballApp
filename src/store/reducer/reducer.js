import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    Demo: [], 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case ActionTypes.DEMO:
            return ({
                ...state,
                Demo: action.payload
            }) 
        default:
            return state;
    }

}