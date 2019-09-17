import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import DogsList from './DogsList'
import Game1 from './Game1'

function Index() {
  return <h2>Home</h2>;
}

class App extends React.Component {
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dogs/">Doggos</Link>
                  </li>
                  <li>
                    <Link to="/game1/">Play gaem</Link>
                  </li>
                </ul>
              </nav>

              <Route path="/" exact component={Index} />
              <Route path="/dogs/" component={DogsList} />
              <Route path="/game1/" component={Game1} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
