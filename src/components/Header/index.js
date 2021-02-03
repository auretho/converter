import React from 'react';
import './style.scss';


const Header = ({amount, result, inputChange, handleAmountSubmit}) => {
    // const [newResult, setNewResult] = useState(result);
    // console.log(newResult)

    const handleChange = (evt) => {
        const {name, value} = evt.target;
        inputChange({
            [name]: value,
        });
        console.log(value);
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log('OK!');

        handleAmountSubmit();
    }


    return(
    <div className="header">
        <h1 className="header-title">Converter</h1>
            <form className="header-wrapper" action="" onSubmit={handleSubmit}>
                <input className="header-amount" name="amount" type="number" placeholder="0" value={amount} onChange={handleChange} />
                <h2 className="header-subtitle">euro</h2>
            </form>
    </div>
)}

export default Header;