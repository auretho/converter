import { connect } from 'react-redux';
import Footer from '../components/Footer';

const mapState = (state) => ({
    amount: state.user.amount,
});

const mapDispatch = null;

export default connect( mapState, mapDispatch)(Footer);