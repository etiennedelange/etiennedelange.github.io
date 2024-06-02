// import kaboom from "kaboom";

// const k = kaboom({global: false, touchToMouse: true});

// k.loadSprite("bean", "sprites/bean.png");

// const player = k.add([
//   k.pos(120, 80),
//   k.sprite("bean"),
//   {speed: 300}
// ]);

// k.onMouseDown(() =>
//   player.moveTo(k.mousePos(), player.speed)
// );

import Phaser from "phaser";

var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 300 },
      debug: false,
    },
  },
  scene: {
    preload: preload,
    create: create,
    update: update,
  },
};

var platforms;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("sky", "./assets/sky.png");
  this.load.image("ground", "./assets/platform.png");
  this.load.image("star", "./assets/star.png");
  this.load.image("bomb", "./assets/bomb.png");
  this.load.spritesheet("dude", "./assets/dude.png", {
    frameWidth: 32,
    frameHeight: 48,
  });
}

var platforms;

function create() {
  this.add.image(400, 300, "sky");

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 568, "ground").setScale(2).refreshBody();

  platforms.create(600, 400, "ground");
  platforms.create(50, 250, "ground");
  platforms.create(750, 220, "ground");
}

function update() {}
