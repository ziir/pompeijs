import { PompeiError } from './utils/errors';

export default class Matrix {
  constructor(array) {
    if (!array || !array.length || array.length !== 16) {
      throw new PompeiError('Bad parameters for Matrix(array[16])');
    }

    this._array = array;
  }

  get array () {
    return this._array;
  }
}
