import React from 'react';
import './style.scss';


const Footer = ({amount, activeCurrency, currencyChange}) => {
    const result = amount * 2;
    
    return(
    <div className="footer">
        <div className="footer-result">{result}</div>
        <div className="footer-currency" >{activeCurrency}</div>
    </div>
)}

export default Footer;