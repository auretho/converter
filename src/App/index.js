import React from 'react';
import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';

import './style.css';

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header />
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
