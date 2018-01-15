import calculateOhmValue from './index';
import { invalidParametersError } from './errors';

describe('calculateOhmValue', () => {
  describe('given valid band values', () => {
    it('returns accurate maximum and minimum resistances', () => {
      const bands = {
        bandAColor: 'violet',
        bandBColor: 'blue',
        bandCColor: 'orange',
        bandDColor: 'red',
      };

      const { maximumOhmValue, minimumOhmValue } = calculateOhmValue(bands);

      expect(maximumOhmValue).toBe(77520);
      expect(minimumOhmValue).toBe(74480);
    });
  });

  describe('given valid band values but no tolerance band', () => {
    it('returns accurate maximum and minimum resistances', () => {
      const bands = {
        bandAColor: 'violet',
        bandBColor: 'blue',
        bandCColor: 'orange',
        bandDColor: 'none',
      };

      const { maximumOhmValue, minimumOhmValue } = calculateOhmValue(bands);

      expect(maximumOhmValue).toBe(91200);
      expect(minimumOhmValue).toBe(60800);
    });
  });

  describe('given invalid parameters', () => {
    it('returns an error describing valid parameters', () => {
      expect(() => calculateOhmValue()).toThrow(invalidParametersError);
    });
  });
});
