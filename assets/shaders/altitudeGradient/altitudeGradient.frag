uniform vec3 bottomColor;
uniform vec3 topColor;

varying vec2 vUv;

void main() {
  gl_FragColor = vec4(mix(bottomColor, topColor, vUv.y), 1.0);
}