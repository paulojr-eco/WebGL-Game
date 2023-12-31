import { Types } from "phaser";
import Phaser from "phaser";
import { MainScene } from "./scenes";

export const mainScene = new MainScene();

const gameConfig: Types.Core.GameConfig = {
  width: "100%",
  height: "100%",
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  render: {
    antialias: false,
    pixelArt: true,
    roundPixels: true
  },
  scene: mainScene
};

export default gameConfig;
