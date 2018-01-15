import { multiplierMap } from '../bandColorMaps';

const validMultiplierBandColors = Object.keys(multiplierMap);

export const invalidBandColorError = `
  getMultiplier expects parameters with the following signature:
  @param {string} bandCColor - a color from the following list:
  ${validMultiplierBandColors.join(', ')}.
`;
