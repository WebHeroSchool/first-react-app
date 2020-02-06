import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const title = "Title";
const truth = true;


class App extends Component {
  render() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>

                <h1 style={{color: 'tomato', margin: 0}}> {title}</h1>
                <p style={{color: 'tomato', margin: 10}}>Это {11} урок из {43}. Осталось {43 - 11} уроков.</p>

                {truth &&
                <p style={{color: 'tomato', margin: 10}}> логические операции</p>
                }
                <p style={{color: 'tomato', margin: 10}}> undefined {undefined} , null {null}, true {true} и false {false} не будут
                    выводиться в разметку</p>

                <p style={{color: 'tomato', margin: 10}}> undefined {undefined} , null {null}, true {true} и false {false} не будут
                    выводиться в разметку</p>

                <div className="app__block" style={{color: 'tomato',}}>Тернарные операторы:
                    {(truth) ?
                        <p style={{margin: 10}}>ok</p> :
                        <p style={{margin: 10}}>bad</p>}
                </div>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
  }
}

export default App;
