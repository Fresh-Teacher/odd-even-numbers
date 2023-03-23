/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Balloon5 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balloon1-a", "./Balloon5/costumes/balloon1-a.svg", {
        x: 96.30894396001912,
        y: 91.51327266618003
      }),
      new Costume("balloon1-b", "./Balloon5/costumes/balloon1-b.svg", {
        x: 31,
        y: 94
      }),
      new Costume("balloon1-c", "./Balloon5/costumes/balloon1-c.svg", {
        x: 31,
        y: 94
      })
    ];

    this.sounds = [
      new Sound("Pop", "./Balloon5/sounds/Pop.wav"),
      new Sound("recording1", "./Balloon5/sounds/recording1.wav"),
      new Sound("recording2", "./Balloon5/sounds/recording2.wav"),
      new Sound("odd", "./Balloon5/sounds/odd.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Pop");
    yield* this.playSoundUntilDone("odd");
  }
}
