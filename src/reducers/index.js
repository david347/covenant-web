import { SET_POLL_DATA } from "../actions";

const initialState = {
    pollData: {}
}

const pollReducer = (state = initialState, action) => {
    switch (action.type ){
        case SET_POLL_DATA:
            return {
                ...state,
                pollData: action.payload
            }
        default:
            return {...state}
    }
};

export default pollReducer;