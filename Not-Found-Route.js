const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, 'http://localhost');

  if (req.method === 'GET' && parsedUrl.pathname === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Manual HTTP Router');
  } 
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ error: 'Not found' }));
  }
});

server.listen(port);