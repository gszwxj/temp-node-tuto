const {readFileSync, writeFileSync} = require('fs');
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

console.log(first, second)

writeFileSync(
    './content/result-sync.txt',
    `Here is the third the result: ${first}, ${second}`,
    {flag: 'a'}   //append
)

console.log('done with this task')
console.log('starting the next one')

// sync way: if the write takes a lot of time, other users can not use it, so , 
// the app is basically down.
// This is why async is better.
