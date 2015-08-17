export default class Vector {
  constructor(position) {
    this.x = position[0];
    this.y = position[1];
    this.z = position[2];
  };

  addInPlace(otherVector) {
    this.x += otherVector.x;
    this.y += otherVector.y;
    this.z += otherVector.z;

    return this;
  };

  add(otherVector) {
    return new Vector(
      this.x + otherVector.x,
      this.y + otherVector.y,
      this.z + otherVector.z
    );
  };

  addToRef(otherVector, result) {
    result.x = this.x + otherVector.x;
    result.y = this.y + otherVector.y;
    result.z = this.z + otherVector.z;

    return this;
  };

  subtractInPlace(otherVector) {
    this.x -= otherVector.x;
    this.y -= otherVector.y;
    this.z -= otherVector.z;

    return this;
  };

  subtract(otherVector) {
    return new Vector(
      this.x - otherVector.x,
      this.y - otherVector.y,
      this.z - otherVector.z
    );
  };

  subtractToRef(otherVector, result) {
    result.x = this.x - otherVector.x;
    result.y = this.y - otherVector.y;
    result.z = this.z - otherVector.z;

    return this;
  };
}
