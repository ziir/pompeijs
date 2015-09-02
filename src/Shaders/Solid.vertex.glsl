#ifdef GL_ES
precision highp float;
#endif

uniform worldViewProjection;

attribute vec3 position;

void main () {
	gl_Position = worldViewProjection * vec4(position.xyz, 1.0);
}
