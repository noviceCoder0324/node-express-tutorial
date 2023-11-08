const path = require('path');

//seperator property
console.log(path.sep); // just return '/'

// /content/subfolder/test.txt 他会自动帮我们加好seperator，链接三个部分，但其实，多一个separator也没事。
const filePath = path.join('/content', '/subfolder/', 'test.txt'); //多了几个，也没事。
console.log(filePath);

const base = path.basename(filePath);
console.log(base); //test.txt

//resolve 会得到最基本absolute的directory。
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);
// /Users/daoyu/Documents/GitHub/node-express/tutorial/content/subfolder/test.txt