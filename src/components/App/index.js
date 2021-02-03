import React, { useState } from 'react';
import Header from '../../containers/Header';
import Main from '../Main';
import Footer from '../../containers/Footer';

import './style.css';

function App() {
  const [ activeCurrency, setActiveCurrency ] = useState(null);


  return (
    <div className="app">
      <div className="container">
        <Header />
        <Main setActiveCurrency={setActiveCurrency}/>
        <Footer activeCurrency={activeCurrency}/>
      </div>
    </div>
  );
}

export default App;
