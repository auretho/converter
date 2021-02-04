import { connect } from 'react-redux';
import Main from '../components/Main';
import { inputChange } from '../actions/userActions';

const mapState = (state) => ({
    currencies: state.user.currencies,
    filter: state.user.filter,
});

const mapDispatch = (dispatch) => ({
    inputChange: (text) => {
        dispatch(inputChange(text));
    },
});

export default connect(mapState, mapDispatch)(Main);