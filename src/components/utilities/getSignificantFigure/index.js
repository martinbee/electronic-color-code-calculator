import { significantFiguresMap } from '../bandColorMaps';
import { invalidBandColorError } from './errors';

const validSignificantFiguresBandColors = Object.keys(significantFiguresMap);

export default function getSignificantFigure(bandColor) {
  const isValidBandColor = validSignificantFiguresBandColors.includes(bandColor);

  if (!isValidBandColor) throw new Error(invalidBandColorError);

  return significantFiguresMap[bandColor];
}
