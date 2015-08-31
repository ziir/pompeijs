import { PompeiError } from './utils/errors';
import Vector3 from './Vector';
import Vector2 from './Vector';

export default class Vertex {
  constructor(position, normal, uv) {
    if (!(position instanceof Vector3)) {
      throw new PompeiError('Bad Parameter: position is not a Vector3. constructor(position, normal, uv)');
    }

    if (!(normal instanceof Vector3)) {
      throw new PompeiError('Bad Parameter: normal is not a Vector3. constructor(position, normal, uv)');
    }

    if (!(uv instanceof Vector2)) {
      throw new PompeiError('Bad Parameter: uv is not a Vector2. constructor(position, normal, uv)');
    }

    this._position = position;
    this._normal = normal;
    this._uv = uv;
  }

  // Position
  get position () {
    return this._position;
  }

  set position (position) {
    if (!(position instanceof Vector3)) {
      throw new PompeiError('Bad Parameter: position is not a Vector3. set position (position)');
    }

    this._position = Position;
  }

  // Normal
  get normal () {
    return this._normal;
  }

  set normal (normal) {
    if (!(normal instanceof Vector3)) {
      throw new PompeiError('Bad Parameter: normal is not a Vector3. set normal (normal)');
    }

    this._normal = normal;
  }

  // UV
  get uv () {
    return this._uv;
  }

  set uv (uv) {
    if (!(uv instanceof Vector2)) {
      throw new PompeiError('Bad Parameter: uv is not a Vector2. set uv (uv)');
    }

    this._uv = uv;
  }
}
