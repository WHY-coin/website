<template>
  <div class="fixed w-screen h-screen">
    <canvas ref="backgroundGrid" class="hidden md:flex"></canvas>
  </div>
</template>


<script setup>
const backgroundGrid = ref(null);
const lastPositions = [];
const vertexShaderSource = `
  attribute vec2 a_position;
  varying vec2 v_position;
  void main() {
    gl_Position = vec4(a_position, 0.0, 1.0);
    v_position = a_position;
  }
`;

const fragmentShaderSource = `
  precision mediump float;
  uniform vec4 u_color;
  uniform vec2 u_resolution;
  uniform vec2 mouse_position;
  varying vec2 v_position;
  void main() {
    vec2 normPosition = (v_position + 1.0) / 2.0;
    vec2 normalizedMouse = mouse_position * 2.0 - 1.0;
    
    float aspectRatio = u_resolution.x / u_resolution.y;
    normalizedMouse.x *= aspectRatio;

    float dist = distance(normalizedMouse, vec2(v_position.x * aspectRatio, v_position.y * -1.0)) * 2.0;
    gl_FragColor = u_color;

    gl_FragColor.a = 1.0 - clamp(pow(dist, 0.25), 0.0, 1.0);
  }
`;
const gridLines = [];


let mouseX = 0;
let mouseY = 0;


function updateMousePosition(e) {
  mouseX = e.clientX;
  mouseY = e.clientY;
}


onMounted(() => {
  const gl = backgroundGrid.value.getContext('webgl', { premultipliedAlpha: false })
  backgroundGrid.value.width = window.innerWidth;
  backgroundGrid.value.height = window.innerHeight;
  gl.viewport(0, 0, backgroundGrid.value.width, backgroundGrid.value.height);

  const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
  const program = createProgram(gl, vertexShader, fragmentShader);

  const positionLocation = gl.getAttribLocation(program, "a_position");
  const colorLocation = gl.getUniformLocation(program, "u_color");
  const mouseLocation = gl.getUniformLocation(program, "mouse_position");
  const useDistLocation = gl.getUniformLocation(program, "use_dist");
  const resolutionLocation = gl.getUniformLocation(program, "u_resolution");

  gl.useProgram(program);

  function createShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Ошибка компиляции шейдера:', gl.getShaderInfoLog(shader));
      return null;
    }
    return shader;
  }

  function createProgram(gl, vertexShader, fragmentShader) {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Ошибка линковки программы:', gl.getProgramInfoLog(program));
      return null;
    }
    return program;
  }

  function drawGrid(mouseX, mouseY) {
    const spacing = 22;
    
    if (gridLines.length === 0) {
      for (let y = 0; y < backgroundGrid.value.height; y += spacing) {
        gridLines.push(-1, (y / backgroundGrid.value.height) * 2 - 1);
        gridLines.push(1, (y / backgroundGrid.value.height) * 2 - 1);
      }
  
      for (let x = 0; x < backgroundGrid.value.width; x += spacing) {
        gridLines.push((x / backgroundGrid.value.width) * 2 - 1, -1);
        gridLines.push((x / backgroundGrid.value.width) * 2 - 1, 1);
      }
    }

    const gridBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, gridBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(gridLines), gl.STATIC_DRAW);

    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    gl.uniform4f(colorLocation, 1.0, 1.0, 1.0, 1.0);
    const mouseNormalizedX = mouseX / window.innerWidth;
    const mouseNormalizedY = mouseY / window.innerHeight;
    gl.uniform2f(mouseLocation, mouseNormalizedX, mouseNormalizedY);
    gl.uniform2f(resolutionLocation, window.innerWidth, window.innerHeight);

    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.LINES, 0, gridLines.length / 2);
  }

  if (window.innerWidth < 768) {
    return;
  }

  // Отслеживание движения мыши
  function render() {
    backgroundGrid.value.width = window.innerWidth;
    backgroundGrid.value.height = window.innerHeight;
    gl.viewport(0, 0, window.innerWidth, window.innerHeight); 
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    drawGrid(mouseX, mouseY);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);

  window.addEventListener('mousemove', updateMousePosition);
  
  drawGrid(0, 0);
});


onBeforeUnmount(() => {
  window.removeEventListener('mousemove', updateMousePosition);
});
</script>
