const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/time') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const responseBody = JSON.stringify({ 
      now: new Date().toISOString() 
    });
    res.end(responseBody);
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port);