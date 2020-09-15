'use strict';

// this works!

import { Board } from '../../../board.js';
import { Mole } from './mole.js';


const game = new Board(Mole, 3, 3);
const gameView = game.render();

document.getElementById('root').appendChild(gameView);
