// import { dialogueData, scaleFactor } from "./constants";
// import { displayDialogue, setCamScale } from "./utils";

// const config = {
//   type: Phaser.AUTO,
//   width: 800,
//   height: 600,
//   backgroundColor: "#311047",
//   scene: {
//     preload: preload,
//     create: create,
//     update: update
//   },
//   physics: {
//     default: 'arcade',
//     arcade: {
//       debug: false
//     }
//   }
// };

// const game = new Phaser.Game(config);

// let player;
// let map;
// let cursors;
// let isInDialogue = false;

// function preload() {
//   this.load.spritesheet('spritesheet', './spritesheet.png', {
//     frameWidth: 32,
//     frameHeight: 32
//   });
//   this.load.image('map', './map.png');
//   this.load.json('mapData', './map.json');
// }

// function create() {
//   const mapData = this.cache.json.get('mapData');
//   const layers = mapData.layers;

//   map = this.add.sprite(0, 0, 'map').setOrigin(0).setScale(scaleFactor);

//   player = this.physics.add.sprite(0, 0, 'spritesheet', 936).setScale(scaleFactor);
//   player.speed = 250;
//   player.direction = 'down';

//   this.anims.create({
//     key: 'idle-down',
//     frames: [{ key: 'spritesheet', frame: 936 }],
//     frameRate: 20
//   });
//   this.anims.create({
//     key: 'walk-down',
//     frames: this.anims.generateFrameNumbers('spritesheet', { start: 936, end: 939 }),
//     frameRate: 8,
//     repeat: -1
//   });
//   this.anims.create({
//     key: 'idle-side',
//     frames: [{ key: 'spritesheet', frame: 975 }],
//     frameRate: 20
//   });
//   this.anims.create({
//     key: 'walk-side',
//     frames: this.anims.generateFrameNumbers('spritesheet', { start: 975, end: 978 }),
//     frameRate: 8,
//     repeat: -1
//   });
//   this.anims.create({
//     key: 'idle-up',
//     frames: [{ key: 'spritesheet', frame: 1014 }],
//     frameRate: 20
//   });
//   this.anims.create({
//     key: 'walk-up',
//     frames: this.anims.generateFrameNumbers('spritesheet', { start: 1014, end: 1017 }),
//     frameRate: 8,
//     repeat: -1
//   });

//   this.physics.add.collider(player, map);

//   for (const layer of layers) {
//     if (layer.name === 'boundaries') {
//       for (const boundary of layer.objects) {
//         const boundaryRect = this.add.rectangle(boundary.x, boundary.y, boundary.width, boundary.height);
//         this.physics.add.existing(boundaryRect, true);
//         this.physics.add.collider(player, boundaryRect, () => {
//           isInDialogue = true;
//           displayDialogue(dialogueData[boundary.name], () => isInDialogue = false);
//         });
//       }
//     }

//     if (layer.name === 'spawnpoints') {
//       for (const entity of layer.objects) {
//         if (entity.name === 'player') {
//           player.setPosition((map.x + entity.x) * scaleFactor, (map.y + entity.y) * scaleFactor);
//         }
//       }
//     }
//   }

//   cursors = this.input.keyboard.createCursorKeys();

//   setCamScale(this);

//   this.scale.on('resize', () => {
//     setCamScale(this);
//   });

//   this.input.on('pointerdown', (pointer) => {
//     if (pointer.leftButtonDown() && !isInDialogue) {
//       const worldMousePos = pointer.positionToCamera(this.cameras.main);
//       this.physics.moveToObject(player, worldMousePos, player.speed);
//       setPlayerDirection(player, worldMousePos);
//     }
//   });

//   this.input.on('pointerup', stopAnims);
//   this.input.keyboard.on('keyup', stopAnims);
// }

// function update() {
//   if (!isInDialogue) {
//     if (cursors.right.isDown) {
//       player.setVelocityX(player.speed);
//       player.flipX = false;
//       player.anims.play('walk-side', true);
//       player.direction = 'right';
//     } else if (cursors.left.isDown) {
//       player.setVelocityX(-player.speed);
//       player.flipX = true;
//       player.anims.play('walk-side', true);
//       player.direction = 'left';
//     } else if (cursors.up.isDown) {
//       player.setVelocityY(-player.speed);
//       player.anims.play('walk-up', true);
//       player.direction = 'up';
//     } else if (cursors.down.isDown) {
//       player.setVelocityY(player.speed);
//       player.anims.play('walk-down', true);
//       player.direction = 'down';
//     } else {
//       player.setVelocity(0);
//       stopAnims();
//     }
//   }
// }

// function setPlayerDirection(player, targetPos) {
//   const angle = Phaser.Math.Angle.Between(player.x, player.y, targetPos.x, targetPos.y);
//   const lowerBound = Phaser.Math.DegToRad(50);
//   const upperBound = Phaser.Math.DegToRad(125);

//   if (angle > lowerBound && angle < upperBound) {
//     player.anims.play('walk-up');
//     player.direction = 'up';
//   } else if (angle < -lowerBound && angle > -upperBound) {
//     player.anims.play('walk-down');
//     player.direction = 'down';
//   } else if (Math.abs(angle) > upperBound) {
//     player.flipX = false;
//     player.anims.play('walk-side');
//     player.direction = 'right';
//   } else if (Math.abs(angle) < lowerBound) {
//     player.flipX = true;
//     player.anims.play('walk-side');
//     player.direction = 'left';
//   }
// }

// function stopAnims() {
//   if (player.direction === 'down') {
//     player.anims.play('idle-down');
//   } else if (player.direction === 'up') {
//     player.anims.play('idle-up');
//   } else {
//     player.anims.play('idle-side');
//   }
// }
