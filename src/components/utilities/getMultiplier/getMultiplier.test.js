import getMultiplier from './index';

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
      const invalidBandValueErrorMessage = `
        getMultiplier expects parameters with the following signature:
        @param {string} bandCColor - a color from the following list:
        ${'add multiplier map logic here'}.
      `;

      expect(() => getMultiplier()).toThrow(invalidBandValueErrorMessage);
    });
  });
});
