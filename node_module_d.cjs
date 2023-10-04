/* eslint-disable no-undef */

require(`./node_module_c.cjs`);

global.Add(100, 101);
console.log(global.fName);
console.log(dName);
