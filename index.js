const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile(`emplyees.json`, 'utf-8', (err, data) => {
    console.log('connected successfully');
    const employee = JSON.parse(data);
    res.end(data);
    console.log(err);
  });
});

server.listen(8000);
