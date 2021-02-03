import React, { useState } from 'react';
import data from '../data';
import './style.scss';

const Main = ({setActiveCurrency}) => {
    
    return(
    <div className="main">
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