import calculateOhmValue from './index.js';
//import {
  //significantFiguresMap,
  //multiplierMap,
  //toleranceBandMap
//} from './color-band-maps'

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
      const invalidParametersErrorMessage = `
        calculateOhmValue expects parameters with the following signature:
        @param {Object} colorBands - contains the resistor's color bands.
        @param {string} colorBands.bandAColor - band A's color.
        @param {string} colorBands.bandBColor - band B's color.
        @param {string} colorBands.bandCColor - band C's color.
        @param {string} colorBands.bandDColor - band D's color.
      `;

      expect(() => calculateOhmValue()).toThrow(invalidParametersErrorMessage);
    });
  });
});
