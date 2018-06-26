var fs = require("fs");

// We need to do this because npm and yarn aren't setting permissions properly.
fs.chmodSync(getX264Path(), 777);

function getX264Path() {
    return __dirname + "/x264";
}

module.exports = getX264Path;
