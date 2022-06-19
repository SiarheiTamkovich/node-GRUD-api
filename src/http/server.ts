import http from 'http';

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST;

export const server = () => {

  const message: string = 'GRUD API server started and listens for requests!';

  const server = http.createServer( async (request, response) => {
    
    if (request.url === "/api" && request.method === "GET") { //set the request route
      
      response.writeHead(200, { "Content-Type": "application/json" }); //response headers
      
      response.write(message); //set the response

      response.end();  //end the response

    } else {  // If no route present

      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify({ message: "Route not found" }));
  }
  })
  
  server.listen(PORT, Number(HOST), () => {
    console.log('GRUD API server started on host:', HOST, 'port:', PORT);
  });
};
