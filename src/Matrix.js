import { PompeiError } from './utils/errors';

export default class Matrix {  
  constructor(array) {
    this.m = new Float32Array(16);
    
    if (array && array.length === 16) {
      for (var i=0; i < array.length; i++) {
        this.m[i] = array[i];
      }
    }
    else {
      this.m = Matrix.Identity().m;
    }
  }
  
  static Identity(result) {
    return Matrix.FromValues(1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 1.0, 0, 0, 0, 0, 1.0);
  }
  
  multiply(other) {
    // Simplify the reading by creating temporary variables
    var m1 = this.m;
    var m2 = other.m;
    var m3 = new Matrix().m;
    
    m3[0] = m1[0]*m2[0] + m1[4]*m2[1] + m1[8]*m2[2] + m1[12]*m2[3];
		m3[1] = m1[1]*m2[0] + m1[5]*m2[1] + m1[9]*m2[2] + m1[13]*m2[3];
		m3[2] = m1[2]*m2[0] + m1[6]*m2[1] + m1[10]*m2[2] + m1[14]*m2[3];
		m3[3] = m1[3]*m2[0] + m1[7]*m2[1] + m1[11]*m2[2] + m1[15]*m2[3];

		m3[4] = m1[0]*m2[4] + m1[4]*m2[5] + m1[8]*m2[6] + m1[12]*m2[7];
		m3[5] = m1[1]*m2[4] + m1[5]*m2[5] + m1[9]*m2[6] + m1[13]*m2[7];
		m3[6] = m1[2]*m2[4] + m1[6]*m2[5] + m1[10]*m2[6] + m1[14]*m2[7];
		m3[7] = m1[3]*m2[4] + m1[7]*m2[5] + m1[11]*m2[6] + m1[15]*m2[7];

		m3[8] = m1[0]*m2[8] + m1[4]*m2[9] + m1[8]*m2[10] + m1[12]*m2[11];
		m3[9] = m1[1]*m2[8] + m1[5]*m2[9] + m1[9]*m2[10] + m1[13]*m2[11];
		m3[10] = m1[2]*m2[8] + m1[6]*m2[9] + m1[10]*m2[10] + m1[14]*m2[11];
		m3[11] = m1[3]*m2[8] + m1[7]*m2[9] + m1[11]*m2[10] + m1[15]*m2[11];

		m3[12] = m1[0]*m2[12] + m1[4]*m2[13] + m1[8]*m2[14] + m1[12]*m2[15];
		m3[13] = m1[1]*m2[12] + m1[5]*m2[13] + m1[9]*m2[14] + m1[13]*m2[15];
		m3[14] = m1[2]*m2[12] + m1[6]*m2[13] + m1[10]*m2[14] + m1[14]*m2[15];
		m3[15] = m1[3]*m2[12] + m1[7]*m2[13] + m1[11]*m2[14] + m1[15]*m2[15];
    
    return m3;
  }
  
  multiplyScalar(scalar) {
    for (var i=0; i < 16; i++) {
      this.m[i] *= scalar;
    }
    
    return this;
  }
  
  plus(other) {
    for (var i=0; i < 16; i++) {
      this.m[i] += other.m[i];
    }
    
    return this;
  }
  
  minus(other) {
    for (var i=0; i < 16; i++) {
      this.m[i] -= other.m[i];
    }
    
    return this;
  }
  
  getTranslation(result) {
    if (result) {
      result.x = this.m[12];
      result.y = this.m[13];
      result.z = this.m[14];
      return result;
    }
    
    return new Vector([this.m[12], this.m[13], this.m[14]]);
  }
  
  setTranslation(translation) {
    this.m[12] = -translation.x;
		this.m[13] = -translation.y;
		this.m[14] = -translation.z;
    
		return this;
  }
  
  setScale(scale) {
    this.m[0] = scale.x;
    this.m[5] = scale.y;
    this.m[10] = scale.z;
    
    return this;
  }
  
  getScale(result) {
    if (result) {
      
      return result;
    }
    
    return null;
  }
}
