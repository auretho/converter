import axios from 'axios';
import { FETCH_CURRENCIES, fetchCurrenciesSuccess, fetchCurrenciesError } from '../actions/userActions';


export default (store) => (next) => (action) => {
    next(action);
    const { dispatch } = store;
    // console.log('je veux laisser passer cette action', action)
    switch (action.type){
        case FETCH_CURRENCIES:
          axios({
            method: 'get',
            url:  'https://restcountries.eu/rest/v2/',
          })
          .then((res) => {
            const APIdatas = res.data;
            // const selectedCountry = APIdatas.find((country) => {
            //   return(
            //   country.name === store.getState().newTravel.step.countryList
            //   )} 
            // );
            // console.log(APIdatas);
            dispatch(fetchCurrenciesSuccess(APIdatas));
          })
          .catch((err) => {
            console.error(err);
            dispatch(fetchCurrenciesError());
          })
          break;      
        default:
          break;
    } 
  };