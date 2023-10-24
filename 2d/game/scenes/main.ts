import { Scene, GameObjects, Cameras } from 'phaser';
import graphData from '../../data/graph-pipe.json';

type node = {
  format: string;
  offsetX: number;
  offsetY: number;
  rotation: number;
};

type edge = {
  id: string;
  from: string;
  to: string;
  weight: number;
  offsetX: number;
  offsetY: number;
  rotation: number;
};

type Graph = {
  nodes: node[];
  edges: edge[];
};

export class MainScene extends Scene {
  private camera!: Cameras.Scene2D.Camera;
  private rt!: GameObjects.RenderTexture;
  private pipes: GameObjects.Image[] = [];
  private edges: GameObjects.Image[] = [];
  private levers: GameObjects.Image[] = [];
  private graph!: Graph;

  preload() {
    this.graph = graphData as unknown as Graph;
    for (const index in this.graph.nodes) {
      this.load.image(
        `pipe-${this.graph.nodes[index].format}`,
        `images/pipes/${this.graph.nodes[index].format}-format.png`
      );
    }
    this.load.image('pipe-connect', 'images/pipes/connect.png');
    this.load.image('lever-off', 'images/pipes/lever-off.png');
    this.load.image('lever-on', 'images/pipes/lever-on.png');
  }

  init() {
    this.scale.on('resize', this.resize, this);
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor('#24252A');
  }

  create() {
    this.rt = this.add.renderTexture(0, 0, 800, 600).setOrigin(0, 0);

    const { centerX, centerY } = this.camera;

    for (const index in this.graph.nodes) {
      const node = this.graph.nodes[index];
      const pipe = this.add
        .image(
          centerX + node.offsetX,
          centerY + node.offsetY,
          `pipe-${node.format}`
        )
        .setScale(0.05);

      if (node.rotation) {
        pipe.angle += node.rotation;
      }
      this.pipes.push(pipe);
    }

    for (const index in this.graph.edges) {
      const edge = this.graph.edges[index];
      const connect = this.add
        .image(centerX + edge.offsetX, centerY + edge.offsetY, 'pipe-connect')
        .setScale(0.05);
      this.edges.push(connect);

      const lever = this.add
        .image(connect.x, connect.y, 'lever-off')
        .setScale(0.05);
      lever.setInteractive();
      lever.name = edge.id;
      if (edge.rotation) {
        connect.angle += edge.rotation;
        lever.angle += edge.rotation;
      }
      this.levers.push(lever);

      const labelCircle = this.add
        .circle(
          edge.rotation ? connect.x - 70 : connect.x,
          edge.rotation ? connect.y : connect.y + 70,
          18
        )
        .setStrokeStyle(5, 0x6674ff);
      this.add
        .text(labelCircle.x, labelCircle.y, edge.weight.toString(), {
          fontFamily: 'Arial',
          fontSize: 20,
        })
        .setOrigin(edge.weight > 9 || edge.weight < 9 ? 0.5 : 0.4, 0.5);
    }

    this.input.on('gameobjectup', this.toggleLever);
  }

  resize(gameSize: GameObjects.Components.Size) {
    this.cameras.resize(gameSize.width, gameSize.height);
  }

  toggleLever(pointer: any, lever: GameObjects.Image) {
    if (lever.texture.key === 'lever-on') {
      lever.setTexture('lever-off');
    } else {
      lever.setTexture('lever-on');
    }
  }
}
