import {preload} from './preload.js';
import {create} from './create.js';
import {update,render} from './update.js';

  const config = {
      type: Phaser.AUTO,
      width: 600,
      height: 490,
      backgroundColor: "black",
      scene: {preload,create,update,render}
  };
  
window.game = new Phaser.Game(config);
