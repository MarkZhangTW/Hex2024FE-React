const fs = require('fs-extra');

const distDir = './dist';

fs.remove(distDir)
  .then(() => console.log(`${distDir} folder removed successfully.`))
  .catch(err => console.log(`Error while removing ${distDir} folder:`, err));