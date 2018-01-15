import getMultiplier from './index';
import { invalidBandColorError } from './errors';

describe('getMultiplier', () => {
  describe('given a valid band value', () => {
    it('returns an accurate multiplier', () => {
      const validBandValue = 'red';
      const multiplier = getMultiplier(validBandValue);

      expect(multiplier).toBe(100);
    });
  });

  describe('given an invalid band value', () => {
    it('returns an error describing a valid band value', () => {
      expect(() => getMultiplier()).toThrow(invalidBandColorError);
    });
  });
});
