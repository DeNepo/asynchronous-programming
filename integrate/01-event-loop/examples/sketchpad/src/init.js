'use strict';

import { Board } from '../../../board.js';
import { ColorSquare } from './color-square.js';


const newBoard = new Board(ColorSquare, 20, 30);
const boardView = newBoard.render()
document.getElementById('root').appendChild(boardView);

