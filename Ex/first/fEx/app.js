const http = require('http');

const hostname = '127.0.0.1';
const port = 3030;

const homePage = require('./pages/index');
const testPage = require('./pages/test');
const error404Page = require('./pages/e404');

const server = http.createServer((request, response) => {
    let pageContent = '';
    if(request.url === '/' || request.url === '/index') {
        pageContent = homePage.show();
    } else if(request.url === '/test'){
        pageContent = testPage.show();
    } else {
        pageContent = error404Page.show();
    }

    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end(pageContent);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
