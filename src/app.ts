import 'dotenv/config';
import { server } from './http/server.js';

export const apiServer = () => {
  server();
}
apiServer();
