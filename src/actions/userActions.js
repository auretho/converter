export const INPUT_CHANGE = 'INPUT_CHANGE';
export const AMOUNT_SUBMIT = 'AMOUNT_SUBMIT';
export const ON_TOGGLE = 'ON_TOGGLE' 


export const inputChange = (payload) => ({
    type: INPUT_CHANGE,
    payload,
});

export const amountSubmit = () => ({
    type: AMOUNT_SUBMIT,
});

export const onToggle = () => ({
    type: ON_TOGGLE,
});