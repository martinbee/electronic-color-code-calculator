export default function calculateOhmValue({
  bandAColor,
  bandBColor,
  bandCColor,
  bandDColor,
}) {
  console.log(bandAColor, bandBColor, bandCColor, bandDColor);

  const firstSignificantFigure = getSignificantFigure(bandAColor);
  const secondSignificantFigure = getSignificantFigure(bandAColor);
  const multiplier = getMultiplier(bandCColor);
  const tolerance = getTolerance(bandDColor);

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
