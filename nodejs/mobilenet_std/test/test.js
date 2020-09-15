const { infer } = require('../pkg/mobilenet_std_lib.js');
const fs = require('fs');

var img_src = fs.readFileSync("grace_hopper.jpg");
console.log("Done reading file");
console.log("Result is: ", infer(img_src));
console.log("Done inference");
