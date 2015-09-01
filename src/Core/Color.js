import { PompeiError } from '../utils/errors';

export default class Color {
	constructor (other) {
		this._r = 0.0;
		this._g = 0.0;
		this._b = 0.0;
		this._a = 0.0;
		
		if (other) {
			if (!(other instanceof Color)) {
				throw new PompeiError('Bad parameter. other must be a Color. constructor (other)');
			}
			this.fromColor(other);
		}
	}
	
	toArray () {
		return [this._r, this._g, this._b, this._a];
	}
	
	fromArray (other) {
		this._r = other[0];
		this._g = other[1];
		this._b = other[2];
		this._a = other[3];
	}
	
	fromColor (other) {
		this._r = other.r;
		this._g = other.g;
		this._b = other.b;
		this._a = other.a;
	}
	
	plus (other) {
		this._r += other.r;
		this._g += other.g;
		this._b += other.b;
		this._a += other.a;
	}
	
	minus (other) {
		this._r -= other.r;
		this._g -= other.g;
		this._b -= other.b;
		this._a -= other.a;
	}
	
	multiply (other) {
		this._r *= other.r;
		this._g *= other.g;
		this._b *= other.b;
		this._a *= other.a;
	}
	
	get r () {
		return this._r;
	}
	
	set r (r) {
		this._r = r;
	}
	
	get g () {
		return this._g;
	}
	
	set g (g) {
		this._g = g;
	}
	
	get b () {
		return this._b;
	}
	
	set b (b) {
		this._b = b;
	}
	
	get a () {
		return this._a;
	}
	
	set a (a) {
		this._a = a;
	}
}
