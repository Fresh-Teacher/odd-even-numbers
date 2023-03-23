/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("backdrop1", "./Stage/costumes/backdrop1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Underwater 1", "./Stage/costumes/Underwater 1.svg", {
        x: 240,
        y: 180
      }),
      new Costume("Boardwalk", "./Stage/costumes/Boardwalk.png", {
        x: 480,
        y: 360
      }),
      new Costume("Colorful City", "./Stage/costumes/Colorful City.png", {
        x: 480,
        y: 360
      }),
      new Costume("Forest", "./Stage/costumes/Forest.png", { x: 480, y: 360 }),
      new Costume("Blue Sky 2 ", "./Stage/costumes/Blue Sky 2 .svg", {
        x: 239.8917,
        y: 180
      }),
      new Costume("Blue Sky", "./Stage/costumes/Blue Sky.svg", {
        x: 246.30159,
        y: 181.00203
      })
    ];

    this.sounds = [new Sound("pop", "./Stage/sounds/pop.wav")];

    this.triggers = [];
  }
}
