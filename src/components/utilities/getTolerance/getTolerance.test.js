import getTolerance from './index';
import { invalidBandColorError } from './errors';

describe('getTolerance', () => {
  describe('given a valid band value', () => {
    it('returns an accurate tolerance', () => {
      const validBandValue = 'red';
      const tolerance = getTolerance(validBandValue);

      expect(tolerance).toBe(2);
    });
  });

  describe('given an invalid band value', () => {
    it('returns an error describing a valid band value', () => {
      const invalidBandValue = 'fuchsia';

      expect(() => getTolerance(invalidBandValue)).toThrow(invalidBandColorError);
    });
  });
});
