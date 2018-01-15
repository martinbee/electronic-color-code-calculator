import { toleranceMap } from '../bandColorMaps';

const validToleranceBandColors = Object.keys(toleranceMap);

export const invalidBandColorError = `
  getTolerance expects parameters with the following signature:
  @param {string} bandDColor - a value from the following list:
  ${validToleranceBandColors.join(', ')}.
`;
