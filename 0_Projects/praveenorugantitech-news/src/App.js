import React, { Component } from 'react';
import './App.css';
import Display from './Display.js';
import './Display.css';
import logo from './images/praveenorugantitech.PNG';
import news from './images/news.png';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="appHeader">
          <img className="appLogo" src={logo} alt="Praveen Oruganti Tech" />

          <div className="title">
            <h1>India News</h1>
            <h4>
              Powered by
              <a href="https://newsapi.org/"> News API </a>🔥{' '}
            </h4>
          </div>

          <img className="scriptLogo" src={news} alt="Javascript Logo" />
        </div>
        <Display/>
      </div>
    );
  }
}

export default App;