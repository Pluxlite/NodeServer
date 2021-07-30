const path = require('path')

//Base file anem
console.log(path.basename(__filename));


//directory name
console.log(path.dirname(__filename));

//File extension
console.log(path.extname(__filename));

// create path object
console.log(path.parse(__filename));

// Concatenate paths
// ../test/hello.html
console.log(path.join(__dirname, 'test','hello.html'))