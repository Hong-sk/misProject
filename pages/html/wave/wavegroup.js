// const colors = document.getElementsByClassName("jsColor");

import { Wave } from "./wave.js";

export class WaveGroup {
  constructor() {
    this.totalWaves = 3;
    this.totalPoints = 6;

    this.color = [
      //3가지 색
      "rgba(255,0,0,0.4)",
      "rgba(255,255,0,0.4)",
      "rgba(0,255,255,0.4)",

      //파란색 계열
      // "rgba(0,199,235,0.4)",
      // "rgba(0,146,199,0.4)",
      // "rgba(0,87,158,0.4)",
    ];

    this.waves = [];

    for (let i = 0; i < this.totalWaves; i++) {
      const wave = new Wave(i, this.totalPoints, this.color[i]);
      this.waves[i] = wave;
    }
  }

  resize(stageWidth, stageHeight) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.resize(stageWidth, stageHeight);
    }
  }

  draw(ctx) {
    for (let i = 0; i < this.totalWaves; i++) {
      const wave = this.waves[i];
      wave.draw(ctx);
    }
  }
  //   Array.from(colors).forEach((color) =>
  //   color.addEventListener("click", handleColorClick)
  // );
}
