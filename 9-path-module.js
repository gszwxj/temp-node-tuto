const path = require('path');

console.log(path.sep)
// console.log(path)

const filePath = path.join('./content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// const absolute = path.resolve(__dirname, 'test.txt');
console.log(absolute)