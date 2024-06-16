import kaboom from "kaboom";

export const k = kaboom({
  global: false,
  touchToMouse: true,
  canvas: document.getElementById("canvas"),
  debug: false, // set to false once ready for production
});