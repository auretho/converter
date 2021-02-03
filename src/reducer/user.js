import { INPUT_CHANGE, AMOUNT_SUBMIT } from '../actions/userActions';
const initialState = {
    amount: "",
    currency: "",
};

const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case INPUT_CHANGE:
            return{
                ...state,
                ...action.payload,
            };
        case AMOUNT_SUBMIT:
            return{
                ...state,
            };
        // case ON_TOGGLE:
        //     return{
        //         ...state,
        //     opened: !state.opened,
        //     }
        default:
            return state;
    }
};

export default user;