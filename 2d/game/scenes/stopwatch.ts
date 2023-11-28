import { Scene } from 'phaser';

export class StopWatch extends Scene {
  private timerText!: Phaser.GameObjects.Text;
  private timerOver!: boolean;
  private stopwatchBg!: Phaser.GameObjects.Image;
  private stopwatchPointer!: Phaser.GameObjects.Image;
  private stopwatchFontSize: number = 28;
  public eventEmitter = new Phaser.Events.EventEmitter();
  private isGameConcluded: boolean = false;

  constructor() {
    super({ key: 'StopWatch' });
  }

  preload() {
    this.load.image('stopwatch-bg', 'images/stopwatch-bg.png');
    this.load.image('stopwatch-pointer', 'images/stopwatch-pointer.png');
  }

  create() {
    this.timerText = this.add.text(
      this.sys.game.canvas.width - 160,
      50,
      '02:00',
      {
        fontFamily: 'DIN Alternate',
        fontSize: this.stopwatchFontSize,
      }
    );
    this.stopwatchBg = this.add
      .image(this.timerText.x + 90, this.timerText.y + 12, 'stopwatch-bg')
      .setScale(0.035);
    this.stopwatchPointer = this.add
      .sprite(this.stopwatchBg.x, this.stopwatchBg.y, 'stopwatch-pointer')
      .setScale(0.035)
      .setOrigin(0.5, 0.56);

    this.timerOver = false;
  }

  update() {
    const showTimer = () => {
      let maxTime = 120;
      let time = Math.floor(this.time.now * 0.001);
      let timeLeft = maxTime - time;

      if (timeLeft <= 10 && timeLeft >= 0) {
        this.stopwatchFontSize += 0.005;
        this.timerText.setFontSize(this.stopwatchFontSize);
        this.stopwatchBg.scale += 0.00001;
        this.stopwatchPointer.scale += 0.00001;
        this.stopwatchBg.x += 0.01;
        this.stopwatchPointer.x += 0.01;
      }

      if (timeLeft <= 0) {
        timeLeft = 0;
        this.timerOver = true;
      }

      let sec = timeLeft % 60;
      let min = Math.floor(timeLeft / 60);

      this.timerText.setText(`0${min.toString()}:${this.to2Digits(sec)}`);
      this.stopwatchPointer.angle += 0.5;
    };

    if (!this.timerOver && !this.isGameConcluded) {
      showTimer();
    } else if (!this.isGameConcluded) {
      this.eventEmitter.emit('stopwatchReachedZero');
    }

    this.eventEmitter.on('gameSuccess', () => {
      this.isGameConcluded = true;
    });
  }

  to2Digits(value: number): String {
    if (value >= 10) {
      return value.toString();
    } else {
      return `0${value.toString()}`;
    }
  }
}
