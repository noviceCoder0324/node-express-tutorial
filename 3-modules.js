// CommonJS, every file in Node is module(by default)
// Modules -encapsulated code(only share minimus)

//NOTE
// everytime you create your own module, use './' or '../' as start.
// buildin modules will NOT use this kind of thing.
const names = require('./4-names');
//这里如果还是用names，那还是会出错。所以可以改成下面的。
const {john, peter} = require('./4-names');
//也可以把下面的john和peter换成names.john and names.peter
const sayHi = require('./5-utils');

console.log(names); // we print the object { john: 'john', peter: 'peter' }

const data = require('./6-alternative-flavor');
console.log(data);//{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

//it does not have to be saved in anywhere.
// all the things in this module will be excuted.
require('./7-mind-grenade'); //the sum is: 15

sayHi('susan');
sayHi(names.john);
sayHi(names.peter);

//NOTE:
//如果你要找module doc information，就去nodejs。com看doc很详细。