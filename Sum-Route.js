const http = require('http');

const port = process.argv[2];

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, 'http://localhost');

  if (req.method === 'GET' && parsedUrl.pathname === '/sum') {
    const a = parsedUrl.searchParams.get('a');
    const b = parsedUrl.searchParams.get('b');

    if (a === null || b === null || a.trim() === '' || b.trim() === '') {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Invalid numbers' }));
    }

    const numA = Number(a);
    const numB = Number(b);

    if (isNaN(numA) || isNaN(numB)) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Invalid numbers' }));
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ sum: numA + numB }));

  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(port);