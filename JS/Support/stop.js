"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stop = stop;
exports.clear = clear;
const ask = require('readline-sync');
function stop() {
    ask.question(`\x1b[35mPress ENTER to continue...\x1b[0m`);
}
function clear() {
    console.clear();
}
