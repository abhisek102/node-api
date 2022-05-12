const http=require('http');

const server=http.createServer(req,res)=>{
    res.end("connected");
}
server.listen(8000)