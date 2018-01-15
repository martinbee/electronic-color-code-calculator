import { multiplierMap } from '../bandColorMaps';
import { invalidBandColorError } from './errors';

const validMultiplierBandColors = Object.keys(multiplierMap);

export default function getMultiplier(bandCColor) {
  const isValidBandColor = validMultiplierBandColors.includes(bandCColor);

  if (!isValidBandColor) throw new Error(invalidBandColorError);

  return multiplierMap[bandCColor];
}
