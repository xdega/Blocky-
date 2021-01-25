import settings from "../settings.js";

const Rectangle = (x, y, w, h, ctx) => {
  ctx.beginPath();
  ctx.rect(x, y, w, h);
  ctx.fillStyle = settings.colors.block;
  ctx.fill();
}

export default Rectangle;