import { PompeiError } from './utils/errors';

export default class Mesh {
  /**
   * @constructor
   * @param {string} name.
   * @param {object} options
   */
  constructor(name, options) {
    if (!name) {
      throw new PompeiError('Bad Parameters : Mesh needs a name');
    }
    options = options || {};

    this._name = name+'';
  }
}
