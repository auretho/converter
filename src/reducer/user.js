import { INPUT_CHANGE, AMOUNT_SUBMIT, FETCH_CURRENCIES_SUCCESS, FETCH_CURRENCIES_ERROR } from '../actions/userActions';
const initialState = {
    amount: "",
    currencies: [],
    filter:"",
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

        case FETCH_CURRENCIES_SUCCESS:
            return {
                ...state,
                currencies: action.payload,
                
            };
            
        case FETCH_CURRENCIES_ERROR:
            return {
            ...state,
        };
        default:
            return state;
    }
};

export default user;