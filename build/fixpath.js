const fs = require('fs');
const config = require('../config');

function getFiles(dir, files_) {
  files_ = files_ || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + '/' + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files_);
    } else {
      files_.push(name);
    }
  }
  return files_;
}

function replaceContent(filePath, stringToReplace, newString) {
  if (!filePath || !stringToReplace || !newString) {
    return console.log('some parameters are missing');
  }

  fs.readFile(filePath, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    const re = new RegExp(stringToReplace, "g");
    const result = data.replace(re, newString);

    fs.writeFile(filePath, result, 'utf8', function (err) {
      if (err) {
        return console.log(err);
      }
    });
  });
}

// Get all CSS files of the project
const fileList = getFiles(`${config.build.assetsRoot}/${config.build.assetsSubDirectory}/css`);

fileList.forEach((file) => {
  replaceContent(file, `/${config.build.assetsSubDirectory}/fonts`, `${config.build.assetsPublicPath}${config.build.assetsSubDirectory}/fonts`);
});
