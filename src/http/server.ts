import http from 'http';

export const server = () => {
  const message: string = 'Http server started!';

  http.createServer(function(request, response): void {
    console.log(message);
    response.end(message);
  }).listen(3000, '127.0.0.1', () => {
    console.log('Http server started and listen requests...');
  });
};
