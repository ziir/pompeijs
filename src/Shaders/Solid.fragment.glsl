#ifdef GL_ES
precision highp float;
#endif

varying vec3 position;
varying vec3 normal;
varying vec2 uv;

void main () {
	vec4 color = vec4(0.0, 0.0, 0.0, 0.0);
	
	color.r = position.x + normal.x;
	color.g = position.y + normal.y;
	color.b = position.z + normal.z;
	color.a = uv.x + uv.y;

	gl_FragColor = color;
}
