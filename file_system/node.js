const fs = require('fs');

fs.writeFile('newFile.txt', 'Hello, world!', (err) => {
  console.log('File created!');
});

fs.copyFile('newFile.txt', 'newFileCopy.txt', (err) => {
  console.log('File copied!');
});

fs.rename('newFile.txt', 'renamedFile.txt', (err) => {
  console.log('File renamed!');
});

fs.readdir('.', (err, files) => {
  console.log(files);
});

fs.stat('renamedFile.txt', (err, stats) => {
  if (err) throw err;
  console.log(`File size: ${stats.size} bytes`);
  console.log(`Last modified: ${stats.mtime}`);
});
