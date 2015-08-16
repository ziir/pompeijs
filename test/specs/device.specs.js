/* global Pompei */
describe('Pompei.Device', function() {
  'use strict';
  const Device = Pompei.Device;

  it('Exists', () => expect(Device).is.not.undefined);

  describe('Initialization', function() {
    const PompeiError = Pompei.PompeiError;
    const WebGLSupportError = Pompei.WebGLSupportError;

    it("doesn't throw when given a canvas element", function() {
      const canvas = { 
        getContext: function() {
          return true;
        }
      };

      expect(new Device(canvas)).not.to.throw;
    });

    it('throws when given a non-canvas element', function() {
      const notACanvas = {};

      expect(new Device(notACanvas)).to.throw(PompeiError);
    });

    it('throws if WebGL is not supported', function() {
      const fakeCanvas = {
        getContext: function() {}
      };

      expect(new Device(fakeCanvas)).to.throw(WebGLSupportError);
    });
  });
});
