import React, { Component } from 'react';

import './styles.css';
import Header from '../Header';
import ResistorColorChart from '../ResistorColorChart';
import BandColorSelects from '../BandColorSelects';
import OhmValues from '../OhmValues';
import ErrorMessage from '../ErrorMessage';
import { calculateOhmValue } from '../utilities';

export default class App extends Component {
  state = {
    bandAColor: '',
    bandBColor: '',
    bandCColor: '',
    bandDColor: 'none',
  };

  setColorBand = (band, value) => this.setState({ [band]: value });

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
          <ResistorColorChart {...this.state} />
          <BandColorSelects
            bandColorValues={this.state}
            setColorBand={this.setColorBand}
          />
          {this.renderOhmValue()}
        </div>
      </div>
    );
  }
}
