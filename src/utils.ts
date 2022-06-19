import { IncomingMessage } from "http";

export async function getReqData(request: IncomingMessage) {
  return new Promise((resolve, reject) => {
      try {
          let body = "";
          // listen to data sent by client
          request.on("data", (chunk) => {
              // append the string version to the body
              body += chunk.toString();
          });
          // listen till the end
          request.on("end", () => {
              // send back the data
              resolve(body);
          });
        } catch (error) {
          reject(error);
      }
  });
}
