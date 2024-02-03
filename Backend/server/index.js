// Use for Create a server
const http = require("http");
const PORT = 8800

// use for file handling
const fs = require('fs');

const useServer = http.createServer((request, response) => {
    
    const log = `${Date.now()} : ${request.url} : New Request Recieved.\n`
    fs.appendFile('log.txt', log, (error, data) => {
        switch (request.url) {
            case '/':
                response.end("Hello Sabar!!");
                break;
            case '/sabar':
                response.end("Hello Sanobar - <3");
                break;
            case '/love':
                response.end("I Love You Meri Jaan <3");
                break;
            case '/bacha':
                response.end("I Miss You Bacha <3");
                break;        
            default:
                response.end("404 not Found.")
        }
    })

});

useServer.listen(PORT, () => console.log("Server Started!!"))