import { PompeiError } from '../utils/errors';
import SceneNode from './SceneNode';
import Vector3 from '../Core/Vector';
import Mesh from '../Mesh/Mesh.js';

export class MeshSceneNode extends SceneNode {
	constructor (name, scene, parent, mesh) {
		super(name, scene, parent);
		
		this._mesh = mesh;
	}
	
	get mesh () {
		return this._mesh;
	}
	
	set mesh (mesh) {
		if (!(mesh instanceof Mesh)) {
			throw new PompeiError('Bad argument: mesh must be a Mesh. set mesh (mesh)');
		}
		
		this._mesh = mesh;
	}
	
	render() {
		if (!this._isVisible) {
			return;
		}
		
		for (let i=0; i < this._mesh.vertexBuffers.length; i++) {
			let vertexBuffer = this._mesh.vertexBuffers[i];
			this._renderer.drawBuffer(vertexBuffer);
		}
	}
}
