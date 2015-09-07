import { PompeiError } from '../utils/errors';

export default class Animator {
  
  /**
   * @constructor
   * @param {object} object
   */
  constructor (object) {
    this._object = object;
  }

  // To be overrided
  onAnimate () { }

  // To be overidded
  onFinished () { }
}
