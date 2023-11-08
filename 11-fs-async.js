const { readFile, writeFile } = require('fs'); 

console.log('start');
// call back function is, we run the function when we are done. like clicklistener, when it is clicked, we start that function.
// if we do not provide decoding param, we will get 
/* <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 69 73 20 74 68 65 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65 2e> */
// Why? the computer doesn't know what to decode. so, add 'utf-8'
readFile('./content/first.txt', 'utf-8', (err, result) => {
  // this means, we read the file first, after reading the file, 
  // we start to run the call back function and use that result.
  if (err) {
    console.log(err);
    return;
  }
    // this is the only place that we can use the result before we read that file. 
    // in readFileSync, we have to read it first and use it. 
    // But in here, we can use it before we read the file.
  console.log(result);
  const first = result;
  readFile('./content/second.txt', 'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    // see, at here, we can get first and second at here without reading those two files.
    const second = result;
    // then, we can use it to write file.
    writeFile(
      './content/result-async.txt', 
      `Here is the result: ${first}, ${second}`, 
      //still a callback function in writeFile. It returns void.
      (err, result)=> {
        if (err) {
          console.log(err);
          return;
        }
        console.log('done with this task');
      });
  })
})

console.log('starting next task.')

// 可以先执行后面的，再进去做call back的事情。不耽误事。
//但写起来太麻烦，所以我们可以用promises，以及async function