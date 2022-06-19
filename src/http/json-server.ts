import jsonServer from 'json-server';
import { dbUsers } from '../db/dbUsers.js';

//console.log(process.env);

const server = jsonServer.create();
const router = jsonServer.router(dbUsers);
const middlewares = jsonServer.defaults();
const PORT = 3000;

server.patch('/users', (req, res) => {
  const { id, status } = req.query;

  console.log(id);
  console.log(status);
})

server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
    console.log('Server is running on localhost port', PORT);
});
