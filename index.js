var child_process = require("child_process");
child_process.execFileSync("chmod", ["a+x", "/home/pi/temp/node_modules/x264-linuxarm/x264"]);

module.exports = function(...args) {
    return __dirname + "/x264";
};