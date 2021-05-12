// include node fs module
var fs = require('fs');
var https = require('https')
 
// writeFile function with filename, content and callback function

function createFile(contador) {
    fs.writeFile(`C:/Users/DEV2/Documents/newfile_${contador}.txt`, 'Learn Node FS module ' + contador,  function (err) {
        if (err) throw err;
        console.log('File is created successfully.');
      });
}

for (let index = 0; index < 10; index++) {;  
    createFile(index)
}