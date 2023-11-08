//OS module - operating system
//这个是build in module，所以不需要安装，同时也不需要‘./’，因为不是我们自己写的。
const os = require('os');

//info about current user
const user = os.userInfo();
console.log(user);
// {
//   uid: 501,
//   gid: 20,
//   username: 'daoyu',
//   homedir: '/Users/daoyu',
//   shell: '/bin/bash'
// }

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds.`);
// The System Uptime is 14257 seconds.

//get info from os
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS);
// {
//   name: 'Darwin',
//   release: '21.6.0',
//   totalMem: 8589934592,
//   freeMem: 792924160
// }