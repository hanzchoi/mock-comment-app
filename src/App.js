import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img src="avatar" />
          </a>
          <div className="content">
            <a href="/" className="author">
              Sam
            </a>
            <div className="metadata">
              <span className="date">
                Today at 6:00PM
              </span>
            </div>
            <div className="text">
              Nice blog mate!
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
