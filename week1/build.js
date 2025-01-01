const fs = require('fs-extra');
const path = require('path');

const filesToCopy = ['index.html', 'style.css'];
const srcDir = './';
const distDir = './dist';

fs.ensureDirSync(distDir);

filesToCopy.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(distDir, file);

    fs.copySync(srcPath, destPath);
    console.log(`Copied ${srcPath} to ${destPath}`)
})

console.log('Build completed!');