import { PompeiError } from './utils/errors';

export default class Renderer {
  constructor(context, options) {
    if (!context) {
      throw new PompeiError('Bad Parameters: constructor(context, options)');
    }
    options = options || {};

    this.onDraw = function onDraw() {};
  }
}
