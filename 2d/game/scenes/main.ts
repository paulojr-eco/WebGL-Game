import { Scene, GameObjects, Cameras } from 'phaser';

export class MainScene extends Scene {
  private helloLabel!: GameObjects.Text;
  private camera!: Cameras.Scene2D.Camera;
  init() {
    this.scale.on("resize", this.resize, this);
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor('#24252A');
  }

  create() {
    const { centerX, centerY } = this.camera;
    this.helloLabel = this.add
      .text(centerX, centerY, 'Hello World', {
        fontFamily: 'Rancho',
        fontSize: 80,
      })
      .setShadow(5, 5, '#5588EE', 0, true, true)
      .setOrigin(0.5, 0.5);
  }

  resize(gameSize: GameObjects.Components.Size) {
    this.cameras.resize(gameSize.width, gameSize.height);
  }
}
