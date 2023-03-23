/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Balloon6 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balloon1-a", "./Balloon6/costumes/balloon1-a.svg", {
        x: 29.333450499635887,
        y: 91.51327266618003
      }),
      new Costume("balloon1-b", "./Balloon6/costumes/balloon1-b.svg", {
        x: 31,
        y: 94
      }),
      new Costume("balloon1-c", "./Balloon6/costumes/balloon1-c.svg", {
        x: 31,
        y: 94
      })
    ];

    this.sounds = [
      new Sound("Pop", "./Balloon6/sounds/Pop.wav"),
      new Sound("recording1", "./Balloon6/sounds/recording1.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Pop");
    yield* this.playSoundUntilDone("recording1");
  }
}
