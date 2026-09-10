const ask = require('readline-sync');

export function stop(): void {
    ask.question(`\x1b[35mPress ENTER to continue...\x1b[0m`);

}

export function clear(): void {
    console.clear()
}

