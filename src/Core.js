import { PompeiError } from './utils/errors';

export default class Core {
	static Clamp (value, low, high) {
		return Math.min(Math.max(value, low), high);
	}
	
	static RadToDeg () {
		return 180.0 / Math.PI;
	}
	
	static DegToRad () {
		return Math.PI / 180.0;
	}
}
