<script setup lang="ts">
let canvas = ref();

const setCanvasSize = () => {
  console.log("setCanvasSize");
  canvas.value.style.width = window.innerWidth + "px";
  canvas.value.style.height = window.innerHeight + "px";

  canvas.value.width = window.innerWidth * 2;
  canvas.value.height = window.innerHeight * 2;
};

const handleWindowResize = () => {
  const ctx = canvas.value.getContext("2d");
  console.log(ctx);

  const imageData = ctx.getImageData(
    0,
    0,
    canvas.value.width,
    canvas.value.height
  );

  // setCanvasSize();
  initDrawing();

  const scaleX = canvas.value.width / imageData.width;
  const scaleY = canvas.value.height / imageData.height;

  ctx.putImageData(imageData, 0, 0);
};

const initDrawing = () => {
  const ctx = canvas.value.getContext("2d");

  setCanvasSize();

  ctx.strokeStyle = "#000";
  // ctx.lineJoin = "round";
  ctx.lineCap = "round";
  ctx.lineWidth = 200;

  // blur the stroke
  ctx.shadowBlur = 100;
  ctx.shadowColor = "#000";

  let isDrawing = false;
  let lastX = 0;
  let lastY = 0;
  let hue = 0;

  const draw = (e) => {
    if (!isDrawing) return;

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX * 2, e.offsetY * 2);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX * 2, e.offsetY * 2];
  };

  canvas.value.addEventListener("mousemove", (e) => {
    draw(e);
    isDrawing = true;
    [lastX, lastY] = [e.offsetX * 2, e.offsetY * 2];
  });

  canvas.value.addEventListener("mousedown", (e) => {
    ctx.strokeStyle = "#919191";
    ctx.shadowColor = "#919191";
  });

  canvas.value.addEventListener("mouseup", (e) => {
    ctx.strokeStyle = "#000";
    ctx.shadowColor = "#000";
  });

  // canvas.value.addEventListener("mousedown", (e) => {
  //   isDrawing = true;
  //   [lastX, lastY] = [e.offsetX, e.offsetY];
  // });
};

onMounted(() => {
  initDrawing();

  addEventListener("resize", (event) => {
    // setCanvasSize()
    // initDrawing()
    handleWindowResize();
  });
});
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>
