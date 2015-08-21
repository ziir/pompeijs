import Vertex from './Vertex';

export default class VertexBuffer {
  constructor (vertices, indices) {
    this.vertices = vertices;
    this.indices = indices;
  }

  get vertices () {
    return this._vertices || [];
  }

  set vertices (vertices) {
    if (Array.isArray(vertices)) {
      this._vertices = vertices;
    } else {
      throw new PompeiError('Bad parameters: set vertices (verticies[])');
    }
  }

  get indices () {
    return this._indices || [];
  }

  merge () {}

  // Remove duplicate in Mesh
  createVertex () {
    return this.vertices.push(this.addVertex(new Vertex(...args)));
  }

  addVertex (vertex) {
    return this.vertices.push(vertex);
  }

  getVertex (param) {
    return this.vertices[
      param instanceof Vertex ? this.getVertexIndex(param) : param
    ];
  }

  getVertexIndex (vertex) {
    return this.vertices.indexOf(vertex);
  }

  removeVertex (vertex) {
    this.vertices.splice(this.getVertexIndex(vertex), 1);
  }
}
