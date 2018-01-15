import React, { Component } from 'react';

import './styles.css';
import Header from '../Header';
import BandColorSelect from '../BandColorSelect';
import OhmValues from '../OhmValues';
import ErrorMessage from '../ErrorMessage';
import {
  calculateOhmValue,
  significantFiguresMap,
  multiplierMap,
  toleranceMap,
} from '../utilities';


export default class App extends Component {
  state = {
    bandAColor: '',
    bandBColor: '',
    bandCColor: '',
    bandDColor: '',
  };

  setColorBand = (band, value) => this.setState({ [band]: value });

  renderBandColorSelects() {
    const {
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor,
    } = this.state;

    const bandColorConfig = [
      {
        label: 'Band A',
        value: bandAColor,
        options: Object.keys(significantFiguresMap),
      },
      {
        label: 'Band B',
        value: bandBColor,
        options: Object.keys(significantFiguresMap),
      },
      {
        label: 'Band C',
        value: bandCColor,
        options: Object.keys(multiplierMap),
      },
      {
        label: 'Band D',
        value: bandDColor,
        options: Object.keys(toleranceMap),
      },
    ];

    return bandColorConfig
      .map(configItem => ({
        setColorBand: (one, two) => console.log(one, two),
        ...configItem,
      }))
      .map(configItem => <BandColorSelect {...configItem} />);
  }

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
          {this.renderBandColorSelects()}
          {this.renderOhmValue()}
        </div>
      </div>
    );
  }
}
