const http = require('http');

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
    if (req.url === '/healthz') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'OK' }));
        return;
    }  

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
        service: "demo-api", 
        message: 'Hello from AKS Security Lab' 
    })); 
});

server.listen(port, '0.0.0.0', () => {
    console.log(`demo-api listening on port  ${port}`);
});
