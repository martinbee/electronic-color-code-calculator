import getSignificantFigure from './index';
import { invalidBandColorError } from './errors';

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
      expect(() => getSignificantFigure()).toThrow(invalidBandColorError);
    });
  });
});
