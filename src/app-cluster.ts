import { server } from './http/server.js';
import os from 'os';
import cluster from 'cluster';

export const apiServer = () => {

  const cpus = os.cpus().length;

  for(let i=0; i<cpus; i++) {
    cluster.fork();
  }
  server();
}

console.log(cluster)

apiServer();



