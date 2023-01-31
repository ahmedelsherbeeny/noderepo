const {readFile,writeFile}=require('fs')

console.log('start');
readFile('./folder/first.txt','utf8',(err,result)=>{
    console.log('start files');
    if(!err){
        const first=result
        readFile('./folder/second.txt','utf8',(err,result)=>{
            if(!err){
                const second=result
                writeFile('./folder/result-async.txt',`
                here is the result as async type of first as 
                :${first} and of second as: ${second}`,(err,result)=>{
    
                    if(!err){
                        console.log('end files');
                    }else{
                        console.log(err)
                        return;
                    }
                })
            }else{
                console.log(err)
                return;
            }
    
        })
    }else{
        console.log(err)
        return;
    }
  

})
console.log('start new task');




