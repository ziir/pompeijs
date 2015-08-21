// import { PompeiError } from './utils/errors';

import Vertex from './Vertex';

export default class Mesh {
  /**
   * @constructor
   * @param {object} geometry.
   * @param {object} options
   */
  constructor(geometry, material, options) {
    this._material = Object.assign({ opacity: 1, color: '#F4F4F4' }, material);
    this._geometry = Object.assign({
      position: [0, 0, 0],
      scale: [1, 1, 1]
    }, geometry);

    this._vertices = [];

    this._options = Object.assign({ name: '' }, options);
  }

  createVertex(...args) {
    return this._vertices[this.addVertex(new Vertex(...args))];
  }

  addVertex(vertex) {
    return this._vertices.push(vertex);
  }

  removeVertex(vertex) {
    const idx = this._vertices.indexOf(vertex);
    if (idx !== -1) {
      array.splice(idx, 1);
    }
  }
}
