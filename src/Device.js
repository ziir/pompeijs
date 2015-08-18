import Renderer from './Renderer';

import { PompeiError, WebGLSupportError } from './utils/errors';

export default class Device {
  constructor(canvas, options) {
    if (!(canvas && typeof canvas.getContext === 'function')) {
      throw new PompeiError('Bad Parameters');
    }
    this._options = options || {};

    try {
      this._gl = (
        canvas.getContext('webgl', options) ||
        canvas.getContext('experimental-webgl', options)
      );
    } catch (e) {
      throw new WebGLSupportError();
    }

    if (!this._gl) {
      throw new WebGLSupportError();
    }

    this._renderer = new Renderer(this._gl, options);
    this._scene = new Scene(this._renderer, options);
  }

  getRenderer() {
    return this._renderer;
  }
}
