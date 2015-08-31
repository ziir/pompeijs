import { PompeiError } from './utils/errors';
import Matrix from './Matrix.js';

export default class Renderer {
  constructor(context, options) {
    if (!context) {
      throw new PompeiError('Bad Parameters: constructor(context, options)');
    }
    options = options || {};

    // Custom functions
    this.onDraw = function onDraw() { };

    // Transformations
    this._worldMatrix = Matrix.Identity();
    this._viewMatrix = Matrix.Identity();
    this._projectionMatrix = Matrix.Identity();
  }
}
