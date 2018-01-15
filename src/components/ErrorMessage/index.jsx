import React from 'react';
import { string } from 'prop-types';

import './styles.css';

const ErrorMessage = ({ message }) => (
  <div className="error">
    <h3>An error has occured:</h3>
    <p>{message}</p>
  </div>
);

ErrorMessage.propTypes = {
  message: string.isRequired,
};

export default ErrorMessage;
