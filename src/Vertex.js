import Vector from './Vector';

export default class Vertex {
  constructor(vector) {
    vector instanceof Vector ||
    () => { throw new PompeiError(`Bad Parameters: constructor(vector)`); }

    this._vector = vector;
  };
}
