import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducer';
import currencyMdlw from '../middleware/currencyMdlw';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(
        currencyMdlw,
    ),
);

const store = createStore(
    reducer, 
    enhancers,
);


export default store;