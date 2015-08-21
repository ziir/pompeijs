import Vector from './Vector';

export default class Vertex {
  constructor(vector) {
    if (!(vector instanceof Vector)) {
      throw new PompeiError('Bad Parameters: constructor(vector)');
    }

    this._vector = vector;
  }

  get vector () {
    return this._vector;
  }
}
