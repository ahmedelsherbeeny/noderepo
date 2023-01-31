const {readFileSync,writeFileSync}=require('fs')

const firstTxt=readFileSync('./folder/first.txt','utf8')
const secondTxt=readFileSync('./folder/second.txt','utf8')
console.log(firstTxt,secondTxt);


// i also can append to the file

writeFileSync('./folder/resuly-sync.txt',`here is the result of first:
${firstTxt}, and the result to second:${secondTxt}`,{flag:'a'})
