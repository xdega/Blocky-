// Import Functionality
import Rectangle from "./game/helpers/rectangle.js";

// Set up game Canvas, etc.
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
ctx.canvas.width = window.innerWidth;
ctx.canvas.height = window.innerHeight;

// Game Logic Begins Here
window.addEventListener("load", () => {
  // Perhaps rename this to "platform", with a fixed width?
  Rectangle(20, 500, 400, 20, ctx);
  Rectangle(500, 400, 200, 20, ctx);
  Rectangle(800, 350, 100, 20, ctx);
});
