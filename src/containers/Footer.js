import { connect } from 'react-redux';
import Footer from '../components/Footer';
import { inputChange } from '../actions/userActions';

const mapState = (state) => ({
    amount: state.user.amount,
});

const mapDispatch = (dispatch) => ({
    currencyChange: (text) => {
        dispatch(inputChange(text));
    },
});

export default connect( mapState, mapDispatch)(Footer);