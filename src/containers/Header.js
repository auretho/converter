import { connect } from 'react-redux';
import Header from '../components/Header';
import { inputChange, amountSubmit } from '../actions/userActions';

const mapState = (state) => ({
    amount: state.user.amount,
    result: state.user.result,
});

const mapDispatch = (dispatch) => ({
    inputChange: (text) => {
        dispatch(inputChange(text));
    },

    handleAmountSubmit: () => {
        dispatch(amountSubmit())
    },
});

export default connect( mapState, mapDispatch)(Header);