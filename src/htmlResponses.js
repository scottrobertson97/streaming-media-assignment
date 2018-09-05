const fs = require('fs');

const getPage = (request, response, path) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
  });
  response.write(path);
  response.end();
};

const getIndex = (request, response) => {
  const path = fs.readFileSync(`${__dirname}/../client/client.html`);
  getPage(request, response, path);
};

const getClient2 = (request, response) => {
  const path = fs.readFileSync(`${__dirname}/../client/client2.html`);
  getPage(request, response, path);
};

const getClient3 = (request, response) => {
  const path = fs.readFileSync(`${__dirname}/../client/client3.html`);
  getPage(request, response, path);
};

module.exports.getIndex = getIndex;
module.exports.getClient2 = getClient2;
module.exports.getClient3 = getClient3;
