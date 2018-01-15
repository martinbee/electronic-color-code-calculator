import { toleranceMap } from '../bandColorMaps';
import { invalidBandColorError } from './errors';

const validToleranceBandColors = Object.keys(toleranceMap);

export default function getTolerance(bandDColor = 'none') {
  const isValidBandColor = validToleranceBandColors.includes(bandDColor);

  if (!isValidBandColor) throw new Error(invalidBandColorError);

  return toleranceMap[bandDColor];
}
