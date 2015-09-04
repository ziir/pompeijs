import { PompeiError } from './utils/errors';
import Renderer from '../Renderer';
import Core from '../Core/Core.js';
import Matrix from '../Core/Matrix';

export default class Material {
  constructor (renderer, vertexPath, pixelPath, attributes, uniforms, defines) {
    if (!(renderer instanceof Renderer)) {
      throw new PompeiError('Bad parameters: renderer is needed. constructor (renderer, vertexPath, pixelPath, attributes, uniforms)');
    }
    if (!vertexPath || !pixelPath) {
      throw new PompeiError('Bad parameters: vertexPath and pixelPath are needed. constructor (renderer, vertexPath, pixelPath, attributes, uniforms)');
    }
    if (!Array.isArray(attributes)) {
      throw new PompeiError('Bad parameter: attributes must be an array of string. constructor (renderer, vertexPath, pixelPath, attributes, uniforms)');
    }
    if (uniforms && !Array.isArray(uniforms)) {
      throw new PompeiError('Bad parameter: uniforms must be an array of string. constructor (renderer, vertexPath, pixelPath, attributes, uniforms)');
    }
    
    this._renderer = renderer;
    
    this._defines = defines ? defines : [];
    this._vertexPath = vertexPath;
    this._pixelPath = pixelPath;
    this._attributes = attributes;
    this._uniforms = uniforms ? uniforms : [];
    
    this._program = null;
    this._programReady = false;
  }
  
  get renderer () {
    return this._renderer;
  }
  
  get program () {
    return this._program;
  }
  
  get defines () {
    return this._defines;
  }
  
  get attributes () {
    return this._attributes;
  }
  
  get uniforms () {
    return this._uniforms;
  }
  
  get programReady () {
    return this._programReady;
  }
  
  compile () {
    Core.LoadFile(this._vertexPath, false, (vertexCode) => {
      Core.LoadFile(this._pixelPath, false, (pixelCode) => {
        let defines = '';
        for (let i=0; i < this._defines.length; i++) {
          defines += '#define ' + this._defines[i]; + '\n';
        }
        
        this._program = this._renderer.createProgram(vertexCode, pixelCode, this._attributes, this._uniforms, defines);
        this._programReady = true;
      });
    });
  }
  
  onSetConstants (renderer) {
    var worldViewProjection = new Matrix();
    worldViewProjection.multiply(renderer.projectionMatrix).multiply(renderer.viewMatrix).multiply(renderer.worldMatrix);
    renderer.setMatrix(worldViewProjection);
  }
  
  // To be replaced
  onSetMaterial () { }
}
