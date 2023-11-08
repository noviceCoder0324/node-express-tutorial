// GLOBALS - NO WINDOW!! anywhere in app you can use it.
//最常用的就在这。

// __dirname      -path to current directory
// __filename     -filename
// require        -function to use modules(CommonJS)我们马上就要学
// module         -info about current module(file)要学
// process        -info about env where the program is being executed非常有用

//NOTE:
console.log(__dirname);
///Users/daoyu/Documents/GitHub/node-express/tutorial

setInterval(()=>{
  console.log('hello world');
}, 1000)
// stop this, use ctrl + c

