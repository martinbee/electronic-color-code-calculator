import React from 'react';
import { number } from 'prop-types';

const OhmValues = ({ minimumOhmValue, maximumOhmValue }) => (
  <div>
    <p>Minimum: {minimumOhmValue}Ω</p>
    <p>Maximum: {maximumOhmValue}Ω</p>
  </div>
);

OhmValues.propTypes = {
  minimumOhmValue: number.isRequired,
  maximumOhmValue: number.isRequired,
};

export default OhmValues;
