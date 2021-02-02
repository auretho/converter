import React from 'react';
import data from './data';
import './style.scss';

const Main = () => (
    <div className="main">
        <h1 className="main-title">Currencies</h1>
        <ul className="main-list">
            {data.map(currency => (
                <li className="main-currency" key={currency.name}>{currency.name}</li>)
            )}
        </ul>
    </div>
)

export default Main;