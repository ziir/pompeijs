import { PompeiError } from './utils/errors';
import Vertex from './Vertex';
import Material from '../Material/Material';

export default class VertexBuffer {
  constructor (vertices, indices) {

    this._positions = [];
    this._normals = [];
    this._uvs = [];
    this._indices = [];

    this._material = null;

    this._vertexBuffer = null;
    this._indexBuffer = null;
    this._normalBuffer = null;
    this._uvBuffer = null;

    this._indexIs32Bits = false;

    if (vertices && Array.isArray(vertices)) {
      this.merge(vertices);
    }
  }

  get material () {
    return this._material;
  }

  set material (material) {
    if (material !== null && !(material instanceof Material)) {
      throw new PompeiError('Bad parameter. Cannot set a material that is not a Material or null. set material (material)');
    }

    this._material = material;
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

  get isIndex32Bits () {
    return this._indexIs32Bits;
  }

  set indexIs32Bits (is32Bits) {
    this._indexIs32Bits = is32Bits;
  }

  // Positions
  get positions () {
    return this._positions;
  }

  // Normals
  get normals () {
    return this._normals;
  }

  // UVs
  get uvs () {
    return this._uvs;
  }

  // Methods
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

  // Attributes
  get a_position () {
    return this._vertexBuffer;
  }

  get a_position_stride () {
    return 3;
  }

  get a_normal () {
    return this._normalBuffer;
  }

  get a_normal_stride () {
    return 3;
  }

  get a_uv () {
    return this._uvBuffer;
  }

  get a_uv_stride () {
    return 2;
  }

  get indexBuffer () {
    return this._indexBuffer;
  }
}
