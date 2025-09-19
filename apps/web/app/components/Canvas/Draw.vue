<script setup lang="ts">
import { useEventListener, useWindowSize } from '@vueuse/core'

const canvas = ref<HTMLCanvasElement | null>(null)
let ctx: CanvasRenderingContext2D | null = null

const cssProperties = computed(() => {
  const root = document?.documentElement
  return {
    stroke: getComputedStyle(root).getPropertyValue('--color-neutral-900'),
  }
})

const { width: windowWidth, height: windowHeight } = useWindowSize()

let isDrawing = false
let lastX = 0
let lastY = 0
let viewportX = 0
let viewportY = 0

const getCanvasCoordinates = (x: number, y: number) => {
  if (!canvas.value) return null
  const rect = canvas.value.getBoundingClientRect()
  return {
    x: (x - rect.left) * 2,
    y: (y - rect.top) * 2,
  }
}

interface Stroke {
  from: { x: number; y: number }
  to: { x: number; y: number }
  timestamp: number
  color: string
  shadowColor: string
  lineWidth: number
  lineCap: CanvasLineCap
  shadowBlur: number
}

const strokes = ref<Stroke[]>([])

const draw = (coords: { x: number; y: number } | null) => {
  if (!isDrawing || !ctx || !coords) return

  strokes.value.push({
    from: { x: lastX, y: lastY },
    to: { x: coords.x, y: coords.y },
    timestamp: Date.now(),
    color: ctx.strokeStyle as string,
    shadowColor: ctx.shadowColor as string,
    lineWidth: ctx.lineWidth,
    lineCap: ctx.lineCap as CanvasLineCap,
    shadowBlur: ctx.shadowBlur,
  })
  ;[lastX, lastY] = [coords.x, coords.y]
}

const handleMouseMove = (e: MouseEvent) => {
  const coords = getCanvasCoordinates(e.clientX, e.clientY)
  draw(coords)
  isDrawing = true
  if (coords) {
    ;[lastX, lastY] = [coords.x, coords.y]
  }
}

const handleTouchMove = (e: TouchEvent) => {
  if (e.touches.length === 0) return
  const coords = getCanvasCoordinates(e.touches[0]?.clientX || 0, e.touches[0]?.clientY || 0)
  draw(coords)
  isDrawing = true
  if (coords) {
    ;[lastX, lastY] = [coords.x, coords.y]
  }
}

const handleScroll = () => {
  isDrawing = true
  const coords = getCanvasCoordinates(viewportX, viewportY)
  draw(coords)
}

const trackMouse = (e: MouseEvent) => {
  viewportX = e.clientX
  viewportY = e.clientY
}

const animate = () => {
  requestAnimationFrame(animate)

  if (!ctx || !canvas.value) {
    return
  }

  const now = Date.now()
  const expirationTime = 1000

  strokes.value = strokes.value.filter((stroke) => now - stroke.timestamp < expirationTime)

  ctx.clearRect(0, 0, canvas.value.width, canvas.value.height)

  for (const stroke of strokes.value) {
    ctx.beginPath()
    ctx.moveTo(stroke.from.x, stroke.from.y)
    ctx.lineTo(stroke.to.x, stroke.to.y)
    ctx.strokeStyle = stroke.color
    ctx.shadowColor = stroke.shadowColor
    ctx.lineWidth = stroke.lineWidth
    ctx.lineCap = stroke.lineCap
    ctx.shadowBlur = stroke.shadowBlur
    ctx.stroke()
  }
}

onMounted(() => {
  if (!canvas.value) return
  ctx = canvas.value.getContext('2d')
  if (!ctx) return

  // Watch for window size changes to resize canvas.
  // This is done in onMounted to ensure the canvas element is available.
  watch(
    [windowWidth, windowHeight],
    ([w, h]) => {
      if (!canvas.value || !ctx) return
      const canvasEl = canvas.value

      canvasEl.style.width = `${w}px`
      canvasEl.style.height = `${h}px`
      canvasEl.width = w * 2
      canvasEl.height = h * 2

      // Reset context properties
      ctx.strokeStyle = cssProperties.value.stroke
      ctx.lineCap = 'round'
      ctx.lineWidth = 200
      ctx.shadowBlur = 100
      ctx.shadowColor = cssProperties.value.stroke
    },
    { immediate: true },
  )

  animate()
})

// Set up listeners with VueUse, which handles cleanup automatically
useEventListener(canvas, 'mousemove', handleMouseMove)
useEventListener(canvas, 'touchmove', handleTouchMove, { passive: true })
useEventListener(window, 'scroll', handleScroll)
useEventListener(window, 'mousemove', trackMouse)
</script>

<template>
  <canvas ref="canvas"></canvas>
</template>
