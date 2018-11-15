import {FETCH_MODEL_OWNER, GET_STORE, INPUT, SET_REALM_RESULT, FETCH_CARS} from '/Users/irion94/Mechanic/src/actions/db_util_action'

const initialState = {
    ownerArray: [],
    carsArray: [],
    input: '',
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MODEL_OWNER:
            return {
                ...state,
                ownerArray: action.data
            };
        case FETCH_CARS:
            return {
                ...state,
                carsArray: action.data
            }
        case INPUT:
            return {
                ...state,
                input: action.data
            };
        case GET_STORE:
            return {
                ...state
            };
        case SET_REALM_RESULT:
            return {
                ...state,
                ownerArray: action.data
            };
        default:
            return state;
    }
};

export default reducers