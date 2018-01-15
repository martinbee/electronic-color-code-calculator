import React, { Component } from 'react';

import './styles.css';
import Header from '../Header';
import OhmValues from '../OhmValues';
import ErrorMessage from '../ErrorMessage';
import { calculateOhmValue } from '../utilities';

class App extends Component {
  state = {
    bandAColor: '',
    bandBColor: '',
    bandCColor: '',
    bandDColor: '',
  };

  renderOhmValue() {
    const {
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor,
    } = this.state;

    const shouldCalculateOhmValue = bandAColor && bandBColor && bandCColor;

    if (!shouldCalculateOhmValue) return null;

    // use state instead??
    try {
      const ohmValues = calculateOhmValue({
        bandAColor,
        bandBColor,
        bandCColor,
        bandDColor,
      });

      return <OhmValues {...ohmValues} />;
    } catch ({ message }) {
      return <ErrorMessage message={message} />;
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          {this.renderOhmValue()}
        </div>
      </div>
    );
  }
}

export default App;
