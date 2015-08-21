import Renderer from './Renderer';
import Scene from './Scene';

import { PompeiError, WebGLSupportError } from './utils/errors';

export default class Device {
  constructor (canvas, options) {
    if (!(canvas && typeof canvas.getContext === 'function')) {
      throw new PompeiError('Bad Parameters');
    }

    this._options = options || {};

    this.gl = canvas.getContext('webgl', options) ||
      canvas.getContext('experimental-webgl', options);

    this._renderer = new Renderer(this.gl, options);
    this._scene = new Scene(this.renderer, options);
  }

  get gl () {
    return this._gl;
  }

  set gl (context) {
    try {
      this._gl = context;
    } catch (e) {
      throw new WebGLSupportError();
    }

    if (!this.gl) {
      throw new WebGLSupportError();
    }
  }

  get renderer () {
    return this._renderer;
  }

  get scene () {
    return this._scene;
  }
  
  get pointerX () {
    return 0;
  }
  
  get pointerY () {
    return 0;
  }
}
