export default class Vector3 {
  constructor (other) {
    this.x = 0.0;
    this.y = 0.0;
    this.z = 0.0;
    
    if (other) {
      this.set(other);
    }
  }
  
  toArray () {
    return [this.x, this.y, this.z];
  }
  
  set (other) {
    if (other instanceof Vector3) {
      this.x = other.x;
      this.y = other.y;
      this.z = other.z;
    }
    else if (other instanceof Array) {
      this.x = other[0];
      this.y = other[1];
      this.z = other[2];
    }
  }
  
  plus (other) {
    this.x += other.x;
    this.y += other.y;
    this.z += other.z;
    
    return this;
  }

  minus (other) {
    this.x -= other.x;
    this.y -= other.y;
    this.z -= other.z;
    
    return this;
  }

  multiply (other) {
    this.x *= other.x;
    this.y *= other.y;
    this.z *= other.z;
    
    return this;
  }

  dot (other) {
    return this.x * other.x + this.y * other.y + this.z * other.z;
  }

  cross (other) {
    this.x = this.y * other.z - this.z * other.y;
    this.y = this.z * other.x - this.x * other.z;
    this.z = this.x * other.y - this.y * other.x;
    
    return this;
  }

  length () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }

  lengthSQ () {
    return this.x * this.x + this.y + this.y + this.z * this.z;
  }

  getDistanceFrom (other) {
    const x = this.x - other.x;
    const y = this.y - other.y;
    const z = this.z - other.z;

    return Math.sqrt(x * x + y * y + z * z);
  }

  getDistanceFromSQ (other) {
    const x = this.x - other.x;
    const y = this.y - other.y;
    const z = this.z - other.z;

    let x = this.x - other.x;
    let y = this.y - other.y;
    let z = this.z - other.z;
    
    return x * x + y * y + z * z;
  }

  normalize () {
    let length = this.x * this.x + this.y * this.y + this.z * this.z;
    if (length === 0) {
      return this;
    }

    length = 1.0 / Math.sqrt(length);
    
    this.x *= length;
    this.y *= length;
    this.z *= length;
    
    return this;
  }
}

export class Vector2 {
  constructor(other) {
    this.x = 0.0;
    this.y = 0.0;
    
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
  
  toArray () {
    return [this.x, this.y];
  }
  
  set (other) {
    if (other instanceof Vector3) {
      this.x = other.x;
      this.y = other.y;
    }
    else if (other instanceof Array) {
      this.x = other[0];
      this.y = other[1];
    }
  }

  plus (other) {
    this.x += other.x;
    this.y += other.y;

    return this;
  }

  minus (other) {
    this.x -= other.x;
    this.y -= other.y;
    
    return this;
  }

  multiply (other) {
    this.x *= other.x;
    this.y *= other.y;
    
    return this;
  }
  
  divide (other) {
    this.x /= other.x;
    this.y /= other.y;
  }
}
