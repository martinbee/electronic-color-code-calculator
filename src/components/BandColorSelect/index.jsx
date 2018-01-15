import React from 'react';
import {
  string,
  func,
  arrayOf,
  shape,
} from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { capitalize } from 'lodash';

const getMenuItems = options => options
  .map(color => ({ value: color, primaryText: capitalize(color) }))
  .map(option => <MenuItem {...option} />);

const BandColorSelect = ({
  label,
  value,
  setColorBand,
  options,
}) => (
  <SelectField
    floatingLabelText={label}
    value={value}
    onChange={setColorBand}
  >
    {getMenuItems(options)}
  </SelectField>
);

BandColorSelect.propTypes = {
  label: string.isRequired,
  value: string,
  setColorBand: func.isRequired,
  options: arrayOf(shape({
    value: string,
    primaryText: string,
  })),
};

export default BandColorSelect;
