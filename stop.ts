const ask = require('readline-sync');

export function stop(): void {
    ask.question('Press ENTER to continue...');
}

