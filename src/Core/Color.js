import { PompeiError } from '../utils/errors';

export default class Color {
	constructor (other) {
		this.r = 0.0;
		this.g = 0.0;
		this.b = 0.0;
		this.a = 0.0;
		
		if (other) {
			if (!(other instanceof Color)) {
				throw new PompeiError('Bad parameter. other must be a Color. constructor (other)');
			}
			this.fromColor(other);
		}
	}
	
	toArray () {
		return [this.r, this.g, this.b, this.a];
	}
	
	fromArray (other) {
		this.r = other[0];
		this.g = other[1];
		this.b = other[2];
		this.a = other[3];
	}
	
	fromColor (other) {
		this.r = other.r;
		this.g = other.g;
		this.b = other.b;
		this.a = other.a;
	}
	
	plus (other) {
		this.r += other.r;
		this.g += other.g;
		this.b += other.b;
		this.a += other.a;
	}
	
	minus (other) {
		this.r -= other.r;
		this.g -= other.g;
		this.b -= other.b;
		this.a -= other.a;
	}
	
	multiply (other) {
		this.r *= other.r;
		this.g *= other.g;
		this.b *= other.b;
		this.a *= other.a;

		return [this._r, this._g, this._b, this._a];
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
