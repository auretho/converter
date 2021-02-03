import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
    applyMiddleware(

    ),
);

const store = createStore(
    reducer, 
    enhancers,
);


export default store;