/* global Pompei */
describe('Pompei.Mesh', function() {
  'use strict';
  const Mesh = Pompei.Mesh;

  it('Exists', () => expect(Mesh).is.not.undefined);

  describe('Initialization', function() {
    const PompeiError = Pompei.PompeiError;

    it("doesn't throw when given a name", function() {
      expect(() => new Mesh('Mesh1')).not.to.throw;
    });

    it('throws when given a null name', function() {
      expect(() => new Mesh(null)).to.throw(PompeiError);
    });
  });
});
