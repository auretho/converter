import React from 'react';
import data from '../data';
import './style.scss';

const Main = ({setActiveCurrency, open}) => {
    
    return(
    <div className={open ? "main" : "main-hidden"}>
        <h1 className="main-title">Currencies</h1>
        <ul className="main-list">
            {data.map(currency => (
                <li className="main-currency" 
                    key={currency.name}
                    onClick={() => {
                        setActiveCurrency(currency.name)
                    }}
                >{currency.name}</li>)
            )}
        </ul>
    </div>
)}

export default Main;