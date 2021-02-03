import React from 'react';
import './style.scss';
import data from '../data';


const Footer = ({amount, activeCurrency}) => {
    const curr = data.find(currency => activeCurrency === currency.name);
    const handleResult = () => {
        if (curr){
            const rate = curr.rate * amount;
            const rounded = Math.round(rate * 100) / 100;
            return rounded;
        }
    };
    
    return(
    <div className="footer">
        <div className="footer-result">{handleResult()}</div>
        <div className="footer-currency" >{activeCurrency}</div>
    </div>
)}

export default Footer;