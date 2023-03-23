import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Balloon1 from "./Balloon1/Balloon1.js";
import Balloon2 from "./Balloon2/Balloon2.js";
import Balloon3 from "./Balloon3/Balloon3.js";
import Balloon4 from "./Balloon4/Balloon4.js";
import Balloon5 from "./Balloon5/Balloon5.js";
import Balloon6 from "./Balloon6/Balloon6.js";
import Balloon7 from "./Balloon7/Balloon7.js";
import Balloon8 from "./Balloon8/Balloon8.js";
import Balloon9 from "./Balloon9/Balloon9.js";
import Balloon10 from "./Balloon10/Balloon10.js";

const stage = new Stage({ costumeNumber: 7 });

const sprites = {
  Balloon1: new Balloon1({
    x: -84,
    y: 86,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Balloon2: new Balloon2({
    x: -181,
    y: 81,
    direction: 90,
    costumeNumber: 3,
    size: 100,
    visible: true,
    layerOrder: 1
  }),
  Balloon3: new Balloon3({
    x: 178,
    y: 76,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 8
  }),
  Balloon4: new Balloon4({
    x: 26.000000000000014,
    y: 88.00000000000001,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 7
  }),
  Balloon5: new Balloon5({
    x: -24.99999999999999,
    y: -37,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 5
  }),
  Balloon6: new Balloon6({
    x: -108,
    y: -47.999999999999986,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 10
  }),
  Balloon7: new Balloon7({
    x: 167.99999999999997,
    y: -57.999999999999986,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 9
  }),
  Balloon8: new Balloon8({
    x: 89,
    y: 13,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  }),
  Balloon9: new Balloon9({
    x: -197,
    y: -65,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 4
  }),
  Balloon10: new Balloon10({
    x: 44.00000000000003,
    y: -80,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 6
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
