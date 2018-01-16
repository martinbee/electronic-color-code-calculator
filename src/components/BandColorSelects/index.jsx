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
import Select from '../Select';
import './style.css';

const getOptions = colorMap => Object.keys(colorMap)
  .map(color => ({ value: color, primaryText: capitalize(color) }));

const baseBandColorConfig = [
  {
    key: 'bandAColor',
    label: 'Band A',
    colorMap: significantFiguresMap,
  },
  {
    key: 'bandBColor',
    label: 'Band B',
    colorMap: significantFiguresMap,
  },
  {
    key: 'bandCColor',
    label: 'Band C',
    colorMap: multiplierMap,
  },
  {
    key: 'bandDColor',
    label: 'Band D',
    colorMap: toleranceMap,
  },
];

const BandColorSelects = ({
  bandColorValues,
  setColorBand,
}) => {
  const getBandColorConfig = () => baseBandColorConfig
    .map(({ key, colorMap, ...rest }) => ({
      key,
      value: bandColorValues[key],
      onChange: (evt, index, value) => setColorBand(key, value),
      options: getOptions(colorMap),
      ...rest,
    }));

  const renderBandColorSelects = () => getBandColorConfig()
    .map(configItem => <Select {...configItem} />);

  return <div className="band-color-selects">{renderBandColorSelects()}</div>;
};

BandColorSelects.propTypes = {
  bandColorValues: shape({
    bandAColor: string,
    bandBColor: string,
    bandCColor: string,
    bandDColor: string,
  }).isRequired,
  setColorBand: func.isRequired,
};

export default BandColorSelects;
