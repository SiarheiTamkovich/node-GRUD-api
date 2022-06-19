import http from 'http';
import { ControllerUser } from '../controllers/conrtoller.users.js'

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST;

export const server = () => {

  const message: string = 'GRUD API server started and listens for requests!';

  const server = http.createServer( async (request, response) => {
    
    if ( //set the request route
      request.url === "/" || 
      request.url === "/api" || 
      request.url === "/api/" && 
      request.method === "GET"
      ) { 
      
      response.writeHead(200, { "Content-Type": "application/json" }); //response headers
      response.write(message); //set the response
      response.end();  //end the response

    } 
    
    else if (request.url === "/api/user" && request.method === "GET") {
    
      const user = await new ControllerUser().getUsers();    
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(user));
    }

    else if (request.url?.match(/\/api\/user\/([0-9]+)/) && request.method === "GET") {

      try {
          const id = request.url.split("/")[3];
          const user = await new ControllerUser().getUser(Number(id));
          response.writeHead(200, { "Content-Type": "application/json" });
          response.end(JSON.stringify(user));
      } catch (error) {
          response.writeHead(404, { "Content-Type": "application/json" });
          response.end(JSON.stringify(error));
      }
    }

    else {  // If route no present
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify('Error 404: this route not found!'));
    }

  })
  
  server.listen(PORT, Number(HOST), () => {
    console.log('GRUD API server started on host:', HOST, 'port:', PORT);
  });
};
