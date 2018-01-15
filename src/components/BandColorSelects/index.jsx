import React from 'react';
import {
  shape,
  string,
  func,
} from 'prop-types';
import { capitalize } from 'lodash';

import {
  significantFiguresMap,
  multiplierMap,
  toleranceMap,
} from '../utilities';
import BandColorSelect from './BandColorSelect';
import './style.css';

const getOptions = colorMap => Object.keys(colorMap)
  .map(color => ({ value: color, primaryText: capitalize(color) }));

const BandColorSelects = ({
  bandColorValues,
  onChange,
}) => {
  const getBandColorConfig = () => {
    const {
      bandAColor,
      bandBColor,
      bandCColor,
      bandDColor,
    } = bandColorValues;

    const initialConfig = [
      {
        label: 'Band A',
        value: bandAColor,
        map: significantFiguresMap,
      },
      {
        label: 'Band B',
        value: bandBColor,
        map: significantFiguresMap,
      },
      {
        label: 'Band C',
        value: bandCColor,
        map: multiplierMap,
      },
      {
        label: 'Band D',
        value: bandDColor,
        map: toleranceMap,
      },
    ];

    return initialConfig.map(({ map, ...rest }) => ({
      onChange,
      options: getOptions(map),
      ...rest,
    }));
  };

  const renderBandColorSelects = () => getBandColorConfig().map(configItem => (
    <BandColorSelect key={configItem.label} {...configItem} />
  ));

  return <div className="band-color-selects">{renderBandColorSelects()}</div>;
};

BandColorSelects.propTypes = {
  bandColorValues: shape({
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string,
  }).isRequired,
  onChange: func.isRequired,
};

export default BandColorSelects;
