const http = require('http');
const fs = require('fs');
const path = require('path');
const querystring = require('querystring');

const PORT = 3000;
const publicDir = path.join(__dirname, 'public');
const filesDir = path.join(__dirname, 'files');

// Ensure files folder exists
if (!fs.existsSync(filesDir)) {
  fs.mkdirSync(filesDir);
}

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    const htmlPath = path.join(publicDir, 'index.html');
    fs.readFile(htmlPath, (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading UI');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }

  // Read File
  else if (req.method === 'GET' && req.url.startsWith('/read')) {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const filename = url.searchParams.get('filename');
    const filepath = path.join(filesDir, filename);

    fs.readFile(filepath, 'utf-8', (err, content) => {
      if (err) {
        res.writeHead(404);
        return res.end('File not found');
      }
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end(content);
    });
  }

  // Create or Delete File (POST)
  else if ((req.method === 'POST' && (req.url === '/create' || req.url === '/delete'))) {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      const { filename, content } = querystring.parse(body);
      const filepath = path.join(filesDir, filename);

      if (req.url === '/create') {
        fs.writeFile(filepath, content || '', err => {
          if (err) {
            res.writeHead(500);
            return res.end('Error writing file');
          }
          res.end('File created successfully');
        });
      } else if (req.url === '/delete') {
        fs.unlink(filepath, err => {
          if (err) {
            res.writeHead(404);
            return res.end('File not found');
          }
          res.end('File deleted successfully');
        });
      }
    });
  }

  // 404
  else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
