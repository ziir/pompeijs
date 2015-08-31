import { PompeiError } from './utils/errors';
import VertexBuffer from './VertexBuffer';

export default class Mesh {
  /**
   * @constructor
   * @param {object} geometry.
   * @param {object} options
   */
  constructor(vertexBuffers) {
    if (!Array.isArray(vertexBuffers)) {
      throw new PompeiError('Bad argument: vertexBuffers must be an array. constructor(vertexBuffers)');
    }
    
    this._vertexBuffers = vertexBuffers;
  }
  
  get vertexBuffers () {
    return this._vertexBuffers;
  }
  
  addVertexBuffer (vertexBuffer) {
    if (!(vertexBuffer instanceof VertexBuffer) {
      throw new PompeiError('Bad argument: vertexBuffer must be an instance of VertexBuffer. addVertexBuffer (vertexBuffer)');
    }
    
    this._vertexBuffers.push(vertexBuffer);
  }
  
  removeVertexBuffer (vertexBuffer) {
    var indice = this._vertexBuffers.indexOf(vertexBuffer);
    
    if (indice !== -1) {
      this._vertexBuffers.splice(indice, 1);
      return true;
    }
    
    return false;
  }
}
