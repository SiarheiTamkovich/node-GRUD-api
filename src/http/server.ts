import http from 'http';
import { ControllerUser } from '../controllers/conrtoller.users.js'
import { getReqData } from '../utils/utils.js';

export const server = () => {

  const PORT = process.env.PORT || 5000;
  const HOST = process.env.HOST;
  const message: string = 'GRUD API server started and listens for requests!';

  const server = http.createServer( async (request, response) => {
    
    if ( //set the request route
      request.url === "/" || 
      request.url === "/api" || 
      request.url === "/api/" && 
      request.method === "GET"
      ) {     
      response.writeHead(200, { "Content-Type": "application/json" }); //response headers
      response.write(message);
      response.end(); 
    } 

    // endpoint /api/user : GET
    else if (request.url === "/api/user" && request.method === "GET") {
      const user = await new ControllerUser().getUsers();    
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(user));
    }

    // endpoint /api/user/:id : GET
    else if (request.url?.match(/\/api\/user\/([0-9]+)/) && request.method === "GET") {
      const id = request.url.split("/")[3];
      try {
        const user = await new ControllerUser().getUser(Number(id));
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify(user));
      } catch (error) {
        if (Number(id) > 0) {
        response.writeHead(404, { "Content-Type": "application/json" });
        response.end(JSON.stringify(error));
        }
        response.writeHead(400, { "Content-Type": "application/json" });
        response.end(JSON.stringify('userId is invalid'));
      }
    }

     // endpoint /api/user/ : POST
    else if (request.url === "/api/user" && request.method === "POST") {
      const user_data = await getReqData(request);
      const user = await new ControllerUser().createUser(JSON.parse(String(user_data)));
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(user));
    }

    else {  // If route no present
      response.writeHead(404, { "Content-Type": "application/json" });
      response.end(JSON.stringify('Error 404: this route not found!'));
    }
  });
  
  server.listen(PORT, Number(HOST), () => {
    console.log('GRUD API server started on host:', HOST, 'port:', PORT);
  });
};
