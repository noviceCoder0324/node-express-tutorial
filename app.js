// npm-node package manager, come with node
// www.npmjs.com 
// you can find all functions and you can create your own.
// There is NO Quality control in NPM registry. 
// 
// npm --version
// 10.2.1

// local dependency - use it only in this particular project
// npm i <packageName>
// 我们只要local就可以。不需要global。

// global dependency - user it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac)

// package.json - manifest file (stores important info about project/package)
// manual approach( create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

// in node_modules, all depandency are in there.
// more than one can be in one depandency in node_modules.

 const _ = require('lodash');
 
 const items = [1, [2, [3, [4]]]];
 const newItems= _.flattenDeep(items);
 console.log(newItems); //[ 1, 2, 3, 4 ]
// 对于第三方的npm，必须要install。去www.npmjs.com 找，然后install就好。

//ignore all the node_modules. Put all those names in .gitignore