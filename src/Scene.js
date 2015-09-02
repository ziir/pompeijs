import { PompeiError } from './utils/errors';
import Renderer from './Renderer';

export default class Scene {
  constructor(renderer, options) {
    if (!renderer || !(renderer instanceof Renderer)) {
      throw new PompeiError('Bad parameters for Scene(renderer, [options])');
    }
    options = options || {};

    this._renderer = renderer;
  }
  
  get renderer () {
    return this._renderer;
  }
  
  draw () {
    if (!this._renderer.defaultMaterial.programReady) {
      return;
    }
    
    // Draw everything here
  }
}
