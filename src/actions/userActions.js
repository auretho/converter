export const INPUT_CHANGE = 'INPUT_CHANGE';
export const AMOUNT_SUBMIT = 'AMOUNT_SUBMIT';
export const FETCH_CURRENCIES = 'FETCH_CURRENCIES';
export const FETCH_CURRENCIES_SUCCESS = 'FETCH_CURRENCIES_SUCCESS';
export const FETCH_CURRENCIES_ERROR = 'FETCH_CURRENCIES_ERROR';

export const inputChange = (payload) => ({
    type: INPUT_CHANGE,
    payload,
});

export const amountSubmit = () => ({
    type: AMOUNT_SUBMIT,
});

export const fetchCurrencies = () => ({
    type: FETCH_CURRENCIES,
})

export const fetchCurrenciesSuccess = (payload) => ({
    type: FETCH_CURRENCIES_SUCCESS,
    payload,
  });
  
export const fetchCurrenciesError = () => ({
type: FETCH_CURRENCIES_ERROR,
});