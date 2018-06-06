const fs = require('fs');

/**
 * Generates a version.txt in build folder with timestamp
 * The version.txt file will be used for auto-cache busting
 * by appending to the end of the script tag src
 * <script src='http://localhost:5000?version' />
 */
function updateVersionTxt() {
  fs.appendFile('./build/version.txt', Date.now(), function(err) {
    if (err) {
      console.log('append failed', err);
    } else {
      console.log('version.txt generated');
    }
  });
}

module.exports = updateVersionTxt;
