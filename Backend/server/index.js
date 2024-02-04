// Use for Create a server
const http = require("http");

// Create a Port Variable
const PORT = 8800;

// use for file handling
const fs = require('fs');

// Use for Create a URL and it store in a url name variable.
const url = require("url");

const useServer = http.createServer((request, response) => {

    // Basically it doesn't generate favicon.ico log file
    if(request.url === '/favicon.ico') return response.end();
    
    const log = `${Date.now()} : ${request.url} : New Request Recieved.\n`;

    const myUrl = url.parse(request.url, true);
    console.log(myUrl)

    fs.appendFile('log.txt', log, (error, data) => {
        switch (myUrl.pathname) {
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
            case '/breakup':
                const reason = myUrl.query.breakupreason
                response.end(`Hey : ${reason} - but why Bacha ?`);
                break;
            case '/user':
                const userInfo = myUrl.query.username
                response.end(`Hello ${userInfo}`);
                break;
            default:
                response.end("404 not Found.")
        }
    })

});

useServer.listen(PORT, () => console.log("Server Started!!"))