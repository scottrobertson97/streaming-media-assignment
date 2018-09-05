const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHeader = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  // console.log(request.url);

  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/client.html':
      htmlHandler.getIndex(request, response);
      break;
    case '/client2.html':
      htmlHandler.getClient2(request, response);
      break;
    case '/client3.html':
      htmlHandler.getClient3(request, response);
      break;

    case '/party.mp4':
      mediaHeader.getParty(request, response);
      break;
    case '/bird.mp4':
      mediaHeader.getBird(request, response);
      break;
    case '/bling.mp3':
      mediaHeader.getBling(request, response);
      break;

    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);

// console.log(`Listening on 127.0.0.1:${port}`);
