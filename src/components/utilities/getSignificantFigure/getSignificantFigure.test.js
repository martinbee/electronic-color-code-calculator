import getSignificantFigure from './index';

describe('getSignificantFigure', () => {
  describe('given a valid band value', () => {
    it('returns an accurate significant figure', () => {
      const validBandValue = 'red';
      const significantFigure = getSignificantFigure(validBandValue);

      expect(significantFigure).toBe(2);
    });
  });

  describe('given an invalid band value', () => {
    it('returns an error describing a valid band value', () => {
      const invalidBandValueErrorMessage = `
        getSignificantFigure expects parameters with the following signature:
        @param {string} bandColor - a color from the following list:
        ${'add significantFigure map logic here'}.
      `;

      expect(() => getSignificantFigure()).toThrow(invalidBandValueErrorMessage);
    });
  });
});
