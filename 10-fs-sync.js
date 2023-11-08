// file system module
// destructure the fs in this way.
const { readFileSync, writeFileSync } = require('fs'); 

console.log('start');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second); 
//Hello this is the first text file. Hello this is the second text file.

//we create a new file
//result-sync.txt in content folder
writeFileSync(
  './content/result-sync.txt', 
  `Here is the result: ${first}, ${second}`,
  // by default, we are creating a new file and overwrite everything.
  // with this a flag, we are keep writing in the previous file. 
  {flag: 'a'}
);

console.log('done with this task');
console.log('starting the next one.');