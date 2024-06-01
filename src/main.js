import kaboom from "kaboom";

const k = kaboom();

k.loadSprite("bean", "sprites/bean.png");

k.add([k.pos(120, 80), k.sprite("bean")]);

console.log("Hello, Kaboom!");

k.onClick(() => k.addKaboom(k.mousePos()));
