#ifdef GL_ES
precision highp float;
#endif

uniform worldViewProjection;

attribute vec3 a_position;
attribute vec3 a_normal;
attribute vec2 a_uv;

varying vec3 position;
varying vec3 normal;
varying vec2 uv;

void main () {
    position = a_position;
    normal = a_normal;
    uv = a_uv;

    gl_Position = worldViewProjection * vec4(a_position.xyz, 1.0);
}
