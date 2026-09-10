"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = stop;
const ask = require('readline-sync');
function stop() {
    ask.question('Press ENTER to continue...');
}
