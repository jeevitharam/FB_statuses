var http = require("http");
var fs = require("fs");

var server = http.createServer(function(request, response){
    if(request.url = "/"){
        fs.readFile('./index.html', function(err, html)
        {
             if(err)
            {
                throw err;
            }
            response.writeHeader(200, {"Content-Type": "text/html"});
            response.write(html);
            response.end();
        });
    }
    else
    {
        response.end("page not found");
    }
           
    


    

});

server.listen(2000, function(){
    
    console.log("your server started in new port 2000");
    
})
