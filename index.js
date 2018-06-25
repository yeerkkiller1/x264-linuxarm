var child_process = require("child_process");

child_process.execFileSync("chmod", ["a+x", __dirname + "/x264"]);

module.exports = function(...args) {
    return __dirname + "/x264";
};