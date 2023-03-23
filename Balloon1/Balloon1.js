/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Balloon1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balloon1-a", "./Balloon1/costumes/balloon1-a.svg", {
        x: 32,
        y: 94
      }),
      new Costume("balloon1-b", "./Balloon1/costumes/balloon1-b.svg", {
        x: 28.833283499878632,
        y: 91.56375755539335
      }),
      new Costume("balloon1-c", "./Balloon1/costumes/balloon1-c.svg", {
        x: 31,
        y: 94
      })
    ];

    this.sounds = [
      new Sound("Pop", "./Balloon1/sounds/Pop.wav"),
      new Sound("recording1", "./Balloon1/sounds/recording1.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Pop");
    yield* this.playSoundUntilDone("recording1");
  }
}
