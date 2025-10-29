precision highp float;
uniform mat4 uProjInv;     // camera.projectionMatrixInverse
uniform float uScale;      // grid resolution on the sphere (e.g. 256.0–1024.0)
uniform float uDensity;    // 0..1 probability of star per cell
uniform float uMinAng;     // min star angular radius (radians, e.g. 0.0003)
uniform float uMaxAng;     // max star angular radius (radians, e.g. 0.0012)
uniform float uSeed;       // random seed
uniform vec3  uColor;      // star color (usually vec3(1.0))

in vec2 vUv;
out vec4 outColor;

// ---------- hashing ----------
float hash12(vec2 p) {
  p = fract(p * vec2(123.34, 345.45));
  p += dot(p, p + 34.345);
  return fract(p.x * p.y);
}
vec2 hash22(vec2 p) {
  return vec2(hash12(p), hash12(p + 17.13));
}

// ---------- octahedral mapping (dir <-> 2D) ----------
vec2 dirToOct(in vec3 n) {
  vec3 v = n / (abs(n.x) + abs(n.y) + abs(n.z));
  return (n.z >= 0.0)
    ? v.xy
    : ((1.0 - abs(v.yx)) * sign(v.xy));
}
vec3 octToDir(in vec2 e) {
  vec3 v = vec3(e, 1.0 - abs(e.x) - abs(e.y));
  if (v.z < 0.0) v.xy = (1.0 - abs(v.yx)) * sign(v.xy);
  return normalize(v);
}

// reconstruct camera-space ray dir for this pixel
vec3 rayDirFromNDC(vec2 ndc) {
  // ndc in [-1,1]
  vec4 h = vec4(ndc, 1.0, 1.0);
  vec4 v = uProjInv * h;        // back to view space
  return normalize(v.xyz / v.w);
}

void main() {
  // NDC from screen quad UV
  vec2 ndc = vUv * 2.0 - 1.0;
  vec3 dir = rayDirFromNDC(ndc);       // camera-space direction

  // Map direction to oct space in [-1,1], then to [0,1]
  vec2 oct = dirToOct(dir);
  vec2 oct01 = oct * 0.5 + 0.5;

  // Grid the oct space
  vec2 g    = oct01 * uScale;
  vec2 cell = floor(g);
  vec2 f    = fract(g);

  // Decide if this cell has a star
  float r = hash12(cell + uSeed);
  if (r < 1.0 - uDensity) {
    outColor = vec4(0.0);
    return;
  }

  // Jitter star center inside the cell (in oct space)
  vec2 j = (hash22(cell + 13.37 + uSeed) - 0.5); // [-0.5,0.5]
  vec2 starOct01 = (cell + 0.5 + 0.45 * j) / uScale; // center + jitter
  vec2 starOct   = starOct01 * 2.0 - 1.0;

  // Convert that 2D point back to a unit direction (camera-space)
  vec3 starDir = octToDir(starOct);

  // Angular distance between current ray and star center
  float cosAng = clamp(dot(dir, starDir), -1.0, 1.0);
  float ang = acos(cosAng);

  // Star size (angular radius)
  float size = mix(uMinAng, uMaxAng, hash12(cell + 42.0 + uSeed));

  // Soft circular falloff in ANGLE space (constant, no fwidth needed)
  float edge = 0.6 * size; // feather width
  float alpha = 1.0 - smoothstep(size - edge, size + edge, ang);

  outColor = vec4(uColor * alpha, alpha);  // premultiplied-friendly
}