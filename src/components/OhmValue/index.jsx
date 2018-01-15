import React from 'react';
import { string } from 'prop-types';

const OhmValue = ({ minimum, maximum }) => (
  <div>
    <p>Minimum: {minimum}Ω</p>
    <p>Maximum: {maximum}Ω</p>
  </div>
);

OhmValue.propTypes = {
  minimum: string.isRequired,
  maximum: string.isRequired,
};

export default OhmValue;
