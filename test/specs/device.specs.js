/* global Pompei */
describe('Pompei.Device', function() {
  'use strict';
  const Device = Pompei.Device;

  it('Exists', () => expect(Device).is.not.undefined);

	describe('Initialization', function() {
    it("doesn't throw when given a canvas element", function() {
      const canvas = { 
        getContext: function() {
          return true;
        }
      };

      expect(new Device(canvas)).not.to.throw;
    });
	});
});