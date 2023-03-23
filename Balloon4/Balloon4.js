/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Balloon4 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("balloon1-a", "./Balloon4/costumes/balloon1-a.svg", {
        x: 29.33336699975726,
        y: 91.51321511078669
      }),
      new Costume("balloon1-b", "./Balloon4/costumes/balloon1-b.svg", {
        x: 31,
        y: 94
      }),
      new Costume("balloon1-c", "./Balloon4/costumes/balloon1-c.svg", {
        x: 31,
        y: 94
      })
    ];

    this.sounds = [
      new Sound("Pop", "./Balloon4/sounds/Pop.wav"),
      new Sound("recording1", "./Balloon4/sounds/recording1.wav")
    ];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.startSound("Pop");
    yield* this.playSoundUntilDone("recording1");
  }
}
