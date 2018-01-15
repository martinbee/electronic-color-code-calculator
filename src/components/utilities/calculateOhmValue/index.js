import { isObject, isEmpty } from 'lodash';

import getSignificantFigure from '../getSignificantFigure';
import getMultiplier from '../getMultiplier';
import getTolerance from '../getTolerance';
import { invalidParametersError } from './errors';

export default function calculateOhmValue(bandColors) {
  if (!isObject(bandColors) || isEmpty(bandColors)) throw new Error(invalidParametersError);

  const {
    bandAColor,
    bandBColor,
    bandCColor,
    bandDColor,
  } = bandColors;

  const firstSignificantFigure = getSignificantFigure(bandAColor);
  const secondSignificantFigure = getSignificantFigure(bandBColor);
  const multiplier = getMultiplier(bandCColor);
  const tolerance = getTolerance(bandDColor || 'none');

  const baseOhmValue = (
    ((firstSignificantFigure * 10) + secondSignificantFigure) * multiplier
  );
  const toleranceOffset = baseOhmValue * (tolerance / 100);
  const minimumOhmValue = baseOhmValue - toleranceOffset;
  const maximumOhmValue = baseOhmValue + toleranceOffset;

  return {
    minimumOhmValue,
    maximumOhmValue,
  };
}
