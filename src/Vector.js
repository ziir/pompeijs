export default class Vector3 {
  constructor (other) {
    this._x = 0.0;
    this._y = 0.0;
    this._z = 0.0;

    if (other) {
      this.set(other);
    }
  }

  set (other) {
    if (other instanceof Vector3) {
      this._x = other.x;
      this._y = other.y;
      this._z = other.z;
    } else if (other instanceof Array) {
      this._x = other[0];
      this._y = other[1];
      this._z = other[2];
    }
  }

  // X
  get x () {
    return this._x;
  }

  set x (x) {
    this._x = x;
  }

  // Y
  get y () {
    return this._y;
  }

  set y (y) {
    this._y = y;
  }

  // Z
  get z () {
    return this._z;
  }

  set z (z) {
    this._z = z;
  }

  plus (other) {
    this._x += other.x;
    this._y += other.y;
    this._z += other.z;

    return this;
  }

  minus (other) {
    this._x -= other.x;
    this._y -= other.y;
    this._z -= other.z;

    return this;
  }

  multiply (other) {
    this._x *= other.x;
    this._y *= other.y;
    this._z *= other.z;

    return this;
  }

  dot (other) {
    return this._x * other.x + this._y * other.y + this._z * other.z;
  }

  cross (other) {
    this._x = this._y * other.z - this._z * other.y;
    this._y = this._z * other.x - this._x * other.z;
    this._z = this._x * other.y - this._y * other.x;

    return this;
  }

  length () {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z);
  }

  lengthSQ () {
    return this._x * this._x + this._y + this._y + this._z * this._z;
  }

  getDistanceFrom (other) {
    const x = this._x - other.x;
    const y = this._y - other.y;
    const z = this._z - other.z;

    return Math.sqrt(x * x + y * y + z * z);
  }

  getDistanceFromSQ (other) {
    const x = this._x - other.x;
    const y = this._y - other.y;
    const z = this._z - other.z;

    return x * x + y * y + z * z;
  }

  normalize () {
    let length = this._x * this._x + this._y * this._y + this._z * this._z;
    if (length === 0) {
      return this;
    }

    length = 1.0 / Math.sqrt(length);

    this._x *= length;
    this._y *= length;
    this._z *= length;

    return this;
  }
}

export class Vector2 {
  constructor(other) {
    this._x = 0.0;
    this._y = 0.0;

    if (other) {
      this.set(other);
    }
  }

  set (other) {
    this._x = other.x;
    this._y = other.y;
  }

  // X
  get x () {
    return this._x;
  }

  set x (x) {
    this._x = x;
  }

  // Y
  get y () {
    return this._y;
  }

  set y (y) {
    this._y = y;
  }

  plus (other) {
    this._x += other.x;
    this._y += other.y;

    return this;
  }

  minus (other) {
    this._x -= other.x;
    this._y -= other.y;

    return this;
  }

  multiply (other) {
    this._x *= other.x;
    this._y *= other.y;

    return this;
  }
}