import Vertex from './Vertex';

export default class VertexBuffer {
  constructor(vertices, indices) {
    // vertexes array of Vertex
    this._vertices = vertices || [];
    this._indices = indices || [];
  }

  merge() {}

  // Remove duplicate in Mesh
  createVertex() {
    return this._vertices[this.addVertex(new Vertex(...args))];
  }

  addVertex(vertex) {
    return this._vertices.push(vertex);
  }

  removeVertex(vertex) {
    const idx = this._vertices.indexOf(vertex);
    !(idx !== -1) || array.splice(idx, 1);
  }
}
