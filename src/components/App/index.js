import React, { useState } from 'react';
import Header from '../../containers/Header';
import Toggler from '../Toggler';
import Main from '../../containers/Main';
import Footer from '../../containers/Footer';

import './style.css';

function App() {
  const [ activeCurrency, setActiveCurrency ] = useState(null);
  const [ open, setOpen ] = useState(false);

  return (
    <div className="app">
      <div className="container">
        <Header />
        <Toggler open={open} setOpen={setOpen}/>

        {
          open && 
          <Main setActiveCurrency={setActiveCurrency} open={open}/>
        }
        <Footer activeCurrency={activeCurrency}/>
      </div>
    </div>
  );
}

export default App;
