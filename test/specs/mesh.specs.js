/* global Pompei */
describe('Pompei.Mesh', function() {
  'use strict';
  const Mesh = Pompei.Mesh;

  it('Exists', () => expect(Mesh).is.not.undefined);

  describe('Initialization', function() {
    const PompeiError = Pompei.PompeiError;

    it("doesn't throw when given no arguments", function() {
      expect(() => new Mesh()).not.to.throw;
    });
  });
});
