class PompeiError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.stack = (new Error()).stack;
    this.name = this.constructor.name;
  }
}

class WebGLSupportError extends Error {
  constructor(m) {
    super(m);
    this.message = m || 'WebGL is not supported';
  }
}

export default class Device {
  constructor(canvas, options) {
    if (!(canvas && canvas.getContext)) {
      throw new PompeiError('Bad Parameters');
    }
    options = options || {};

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
  }
}
