import React from 'react';
import {
  string,
  func,
  arrayOf,
  shape,
} from 'prop-types';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import './style.css';

const getMenuItems = options => options
  .map(({ value, primaryText }) => (
    <MenuItem key={value} value={value} primaryText={primaryText} />
  ));

const BandColorSelect = ({
  label,
  options,
  ...rest
}) => (
  <div className="band-color-select">
    <SelectField
      id={label}
      floatingLabelText={label}
      fullWidth
      {...rest}
    >
      {getMenuItems(options)}
    </SelectField>
  </div>
);

BandColorSelect.propTypes = {
  label: string.isRequired,
  value: string,
  onChange: func.isRequired,
  options: arrayOf(shape({
    value: string,
    primaryText: string,
  })),
};

export default BandColorSelect;
