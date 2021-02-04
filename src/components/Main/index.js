import React from 'react';
import data from '../data';
import './style.scss';

const Main = ({setActiveCurrency, open, filter, inputChange}) => {
    
    const handleChange = (evt) => {
        const text = evt.target.value;
        inputChange({filter: text});
    }

    const filteredCurrencies = data.filter(currency => currency.name.toLowerCase().includes(filter.toLowerCase()))


    return(
    <div className={open ? "main" : "main-hidden"}>
        <form action="">
            <input className="main-title" 
                   type="text" 
                   placeholder="Currencies filter..." 
                   value={filter} 
                   onChange={handleChange}/>
        </form>
        <ul className="main-list">

            {filteredCurrencies.map(currency => (
                <li className="main-currency" 
                    key={currency.name}
                    onClick={() => {
                        setActiveCurrency(currency.name)
                    }}
                >
                    {currency.name}
                    {/* ({
                        currencies.map(country => country.currencies.map(money => {
                            if(currency.name === money.name){
                                return money.symbol
                            } 
                        }))
                    }) */}
                </li>)
            )}
        </ul>
    </div>
)}

export default Main;