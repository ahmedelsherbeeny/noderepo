const path=require('path')

// return specific file separator
console.log(path.sep);


//join return normalized resulting path using our separator for our content file
const filePath=path.join('/folder/','subfolder','text.txt')
console.log(filePath);


// i can get my basename which is text.txt using basename method of filepath
const base=path.basename(filePath)
console.log(base);
   

// resolve method returns an absolute path and it accepts
// a sequence of path or path segments and i would need it because my app may run in different env

const absolute=path.resolve(__dirname,'folder','subfolder','text.txt')

console.log(absolute);


