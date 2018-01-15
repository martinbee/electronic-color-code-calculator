import { significantFiguresMap } from '../bandColorMaps';

const validSignificantFiguresBandColors = Object.keys(significantFiguresMap);

export const invalidBandColorError = `
  getSignificantFigure expects parameters with the following signature:
  @param {string} bandColor - a color from the following list:
  ${validSignificantFiguresBandColors.join(', ')}.
`;
