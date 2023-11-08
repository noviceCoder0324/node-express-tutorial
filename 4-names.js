// local variable
const secret = 'SUPER SECRET';
// share
const john = 'john';
const peter = 'peter';

console.log(module); 
//这个是log出本module里所有的信息。
// {
//   id: '.',
//   path: '/Users/daoyu/Documents/GitHub/node-express/tutorial',
//   exports: {},在这里，什么都没有。所以其他人没办法读到这里的信息。
//   filename: '/Users/daoyu/Documents/GitHub/node-express/tutorial/4-names.js',
//   loaded: false,
//   children: [],
//   paths: [
//     '/Users/daoyu/Documents/GitHub/node-express/tutorial/node_modules',
//     '/Users/daoyu/Documents/GitHub/node-express/node_modules',
//     '/Users/daoyu/Documents/GitHub/node_modules',
//     '/Users/daoyu/Documents/node_modules',
//     '/Users/daoyu/node_modules',
//     '/Users/node_modules',
//     '/node_modules'
//   ]
// }

//export这两个，外面就可以读到了。是以object的形式读到的。{ john: 'john', peter: 'peter' }
module.exports = {john, peter};