import { PompeiError } from './utils/errors';
import Matrix from './Matrix.js';
import VertexBuffer from 'Core/VertexBuffer';
import Material from 'Material/Material';

export default class Renderer {
  constructor(context, options) {
    this._gl = context;

    options = options || {};

    // Custom functions

    this.onDraw = () => { };
    
    // Transformations
    this._worldMatrix = Matrix.Identity();
    this._viewMatrix = Matrix.Identity();
    this._projectionMatrix = Matrix.Identity();
    
    // Rendering
    this._defaultMaterial = new Material(this, "Shaders/Solid.vertex.glsl", "Shaders/Solid.fragment.glsl", ["position"], [], []);
    this._defaultMaterial.compile();
    
    this._currentMaterial = null;
  }

  onResize(width, height) {
    this._gl.viewPort(0, 0, width, height);
  }

  begin(clearColor, clearDepthBuffer, clearBackBuffer) {
    this._gl.clearColor(clearColor.r, clearColor.g, clearColor.b, clearColor.a);

    if (clearDepthBuffer) {
      this._gl.clearDepth(1.0);
      this._gl.clear(this._gl.DEPTH_BUFFER_BIT);
    }

    if (clearBackBuffer) {
      this._gl.clear(this._gl.COLOR_BUFFER_BIT);
    }
  }

  end() {
    // Measure fps here
  }

  drawBuffer (vertexBuffer) {
    
  }
  
  setMaterial (material) {
    if (!material || !material.programReady) {
      this._currentMaterial = this._defaultMaterial;
    }
    else {
      this._currentMaterial = material;
    }
    
    this._gl.useProgram(material.program);
  }
  
  createProgram (vertexCode, pixelCode, attributes, uniforms, defines) {
    let vertex = this._gl.createShader(this._gl.VERTEX_SHADER);
    this._gl.shaderSource(vertex, defines + vertexCode);
    this._gl.compileShader(vertex);
    
    if (!this._gl.getShaderParameter(vertex, this._gl.COMPILE_STATUS)) {
      throw new PompeiError('Cannot compile vertex shader: ' + this._gl.getShaderInfoLog(vertex));
    }
    
    let pixel = this._gl.createShader(this._gl.PIXEL_SHADER);
    this._gl.shaderSource(pixel, defines + pixelCode);
    this._gl.compileShader(pixel);
    
    if (!this._gl.getShaderParameter(pixel, this._gl.COMPILE_STATUS)) {
      throw new PompeiError('Cannot compile pixel shader: ' + this._gl.getShaderInfoLog(pixel));
    }
    
    let program = this._gl.createProgram();
    this._gl.attachShader(program, vertex);
    this._gl.attachShader(program, pixel);
    this._gl.linkProgram(program);
    
    if (!this._gl.getProgramParameter(program, this._gl.LINK_STATUS)) {
      throw new PompeiError('Cannot link vertex and pixel programs: ' + this._gl.getProgramInfoLog(program));
    }
    
    this._gl.deleteShader(vertex);
    this._gl.deleteShader(pixel);
    
    return program;
  }
  
  createVertexBuffer(vertexBuffer) {
    if (!(vertexBuffer instanceof VertexBuffer)) {
      throw new PompeiError('Bad argument: vertexBuffer must be a VertexBuffer. createVertexBuffer (vertexBuffer)');
    }

    let vbo = this._gl.createBuffer();

    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, vbo);
    this._gl.bufferData(this._gl.ARRAY_BUFFER, new Float32Array(vertexBuffer.positions), this._gl.STATIC_DRAW);
    this._gl.bindBuffer(this._gl.ARRAY_BUFFER, null);

    vertexBuffer._vertexBuffer = vbo;
  }

  createIndexBuffer (vertexBuffer) {
    let vbo = this._gl.createBuffer();
    let indices = vertexBuffer.indices;
    let is32Bits = false;

    for (let i = 0; i < indices.length; i++) {
      if (indices[i] >= 65536) {
        is32Bits = true;
        break;
      }
    }

    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, vbo);
    this._gl.bufferData(this._gl.ELEMENT_ARRAY_BUFFER, is32Bits ? new Uint32Array(indices) : new Uint16Array(indices), this._gl.STATIC_DRAW);
    this._gl.bindBuffer(this._gl.ELEMENT_ARRAY_BUFFER, null);

    vertexBuffer._indices = vbo;
  }
  
  removeBuffer (vertexBuffer) {
    this._gl.deleteBuffer(vertexBuffer._vertexBuffer);
    this._gl.deleteBuffer(vertexBuffer._indexBuffer);
    this._gl.deleteBuffer(vertexBuffer._normalBuffer);
    this._gl.deleteBuffer(vertexBuffer._uvBuffer);
  }
  
  // Programs
  get defaultMaterial () {
    return this._defaultMaterial;
  }
  
  // Transformations
  get worldMatrix() {
    return this._worldMatrix;
  }

  get viewMatrix() {
    return this._viewMatrix;
  }

  get projectionMatrix() {
    return this._projectionMatrix;
  }
}
