import getTolerance from './index';

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
      const invalidBandValueErrorMessage = `
        getTolerance expects parameters with the following signature:
        @param {string} bandDColor - a color from the following list:
        ${'add tolerance map logic here'}.
      `;

      expect(() => getTolerance()).toThrow(invalidBandValueErrorMessage);
    });
  });
});
