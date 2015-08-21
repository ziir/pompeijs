import { PompeiError } from './utils/errors';
import Renderer from './Renderer';
<<<<<<< HEAD
import SceneNode from './SceneNodes/SceneNode';
=======
>>>>>>> Clean and fix eslint errors

export default class Scene {
  constructor(renderer, options) {
    if (!renderer || !(renderer instanceof Renderer)) {
      throw new PompeiError('Bad parameters for Scene(renderer, [options])');
    }
    options = options || {};

    this._renderer = renderer;
<<<<<<< HEAD
    
    this._rootSceneNode = new SceneNode("root", this);
    this._rootSceneNode.parent = null;
    
  }
  
  get renderer () {
    return this._renderer;
  }
  
  drawAll () {
    if (!this._renderer.defaultMaterial.programReady) {
      return;
    }
    
    // Sort scene nodes here
    
    // Render
    this.drawSceneNode(this._rootSceneNode, true);
  }
  
  drawSceneNode (node, drawChildren) {
    if (!drawChildren) {
      drawChildren = false;
    }
    
    node.render();
    
    if (!drawChildren) {
      return;
    }
    
    for (var i=0; i < node.children.length; i++) {
      this.drawSceneNode(node.children[i], drawChildren);
    }
=======
  }

  get renderer () {
    return this._renderer;
>>>>>>> Clean and fix eslint errors
  }
}
