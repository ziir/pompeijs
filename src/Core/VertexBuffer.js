import { PompeiError } from './utils/errors';
import Vertex from './Vertex';

export default class VertexBuffer {
  constructor (vertices, indices) {

    this._positions = [];
    this._normals = [];
    this._uvs = [];
    this._indices = [];
    
    this._vertexBuffer = null;
    this._indexBuffer = null;
    this._normalBuffer = null;
    this._uvBuffer = null;
    
    if (vertices && Array.isArray(vertices)) {
      this.merge(vertices);
    }
  }

  set vertices (vertices) {
    if (!Array.isArray(vertices)) {
      throw new PompeiError('Bad parameter: vertices is not an array. set vertices (verticies[])');
    }

    // Reset values
    this._positions = [];
    this._normals = [];
    this._uvs = [];

    // Merge
    this.merge(vertices);
  }

  // Indices
  get indices () {
    return this._indices;
  }

  set indices (indices) {
    if (!Array.isArray(indices)) {
      throw new PompeiError('Bad parameter: indices is not an array. set indices (indices)');
    }

    this._indices = indices;
  }

  // Positions
  get positions () {
    return this._positions;
  }

  // Normals
  get normals () {
    return this._normals;
  }

  merge (vertices) {
    // Fill positions, normals and UVs from vertices of type Vertex
    for ( let i = 0; i < vertices.length; i++ ) {
      this._positions.push(vertices[i].position.x);
      this._positions.push(vertices[i].position.y);
      this._positions.push(vertices[i].position.z);

      if (vertices[i].normal) {
        this._positions.push(vertices[i].normal.x);
        this._positions.push(vertices[i].normal.y);
        this._positions.push(vertices[i].normal.z);
      }

      if (vertices[i].uv) {
        this._uvs.push(vertices[i].uvs.x);
        this._uvs.push(vertices[i].uvs.y);
      }
    }
  }

  addVertex (vertex) {
    if (!(vertex instanceof Vertex)) {
      throw new PompeiError('Bad parameter: vertex is not a Vertex. addVertex (vertex)');
    }

    // Just merge
    this.merge([vertex]);

    return this;
  }
  
}
