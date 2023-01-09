import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    nowTv: [], 
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) { 
        case ActionTypes.NOWTV:
            return ({
                ...state,
                nowTv: action.payload
            }) 
        default:
            return state;
    }

}