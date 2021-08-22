import getDomObjects from './domObjects'

export default class SpriteObject {   //make class object
  constructor() {
    const {canvas,ctx,spriteSheet} = getDomObjects();
    this.image = spriteSheet;
    this.context = ctx;
    this.frameIndex = 0;
    this.tickCount = 0;
  }
}
