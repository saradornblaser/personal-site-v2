import getDomObjects from './domObjects'

export default function drawGrass() {
  const {canvas, ctx} = getDomObjects();
  ctx.fillStyle = 'green';
  ctx.fillRect(0, canvas.height - 2, 400, 2);
}

