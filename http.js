
// http is used to create a server

const http=require('http');
const server=http.createServer((req,res)=>{

    // keep in mind that req and res are objects

    if(req.url === '/'){
        res.end('hello from home page')
    }
    if(req.url === '/about'){
        res.end('hello from about page')
    }
    
        res.end(`

        <h1>Oops</h1>
        <p>it seems that we have an err</p>
        <a href='/'>back to home</a>
        
        `)
    

  

})
server.listen(5000)