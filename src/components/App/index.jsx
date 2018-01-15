import React, { Component } from 'react';

import './styles.css';
import Header from '../Header';
import BandColorSelects from '../BandColorSelects';
import OhmValues from '../OhmValues';
import ErrorMessage from '../ErrorMessage';
import { calculateOhmValue } from '../utilities';

export default class App extends Component {
  state = {
    bandAColor: '',
    bandBColor: '',
    bandCColor: '',
    bandDColor: '',
  };

  setColorBand = (one, two) => console.log(one, two);
  //setColorBand = (band, value) => this.setState({ [band]: value });

  renderOhmValue() {
    const {
      bandAColor,
      bandBColor,
      bandCColor,
    } = this.state;

    const shouldCalculateOhmValue = bandAColor && bandBColor && bandCColor;

    if (!shouldCalculateOhmValue) return null;

    try {
      const ohmValues = calculateOhmValue(this.state);

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
          <BandColorSelects
            bandColorValues={this.state}
            onChange={this.setColorBand}
          />
          {this.renderOhmValue()}
        </div>
      </div>
    );
  }
}
