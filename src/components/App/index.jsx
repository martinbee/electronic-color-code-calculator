import React, { Component } from 'react';

import './styles.css';
import Header from '../Header';

class App extends Component {
  state = {
    bandAColor: '',
    bandBColor: '',
    bandCColor: '',
    bandDColor: '',
  };

  render() {
    return (
      <div className="App">
        <Header />
        <p className="App-intro">
          Add code here
        </p>
      </div>
    );
  }
}

export default App;
