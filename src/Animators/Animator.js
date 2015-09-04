import { PompeiError } from '../utils/errors';

export default class Animator {
	constructor (object) {
		this._object = object;
	}
	
	// To be overrided
	onAnimate () { }
	
	// To be overidded
	onFinished () { }
}