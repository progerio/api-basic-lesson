import http from 'http';
import express from 'express';
import './config/config';
import { loggingHandler } from './middleware/loggingHandler';
import { corsHandler } from './middleware/corsHandler';
import { routeNotFound } from './middleware/routeNotFound';

export const app = express();
export let httpServer: ReturnType<typeof http.createServer>;

export const Main = () => {
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(loggingHandler);
  app.use(corsHandler);
  
  app.get('/main/healthcheck', (req, res, next) => {
     res.status(200).json({ hello: 'World' });
     return;
  }); 

  app.use(routeNotFound);

  httpServer = http.createServer(app);
  httpServer.listen(process.env.SERVER_PORT, () => {     
    console.log(`Server is running at http://localhost:${process.env.SERVER_PORT}`);
  });
};

export const Shutdown = (callback: any) => httpServer && httpServer.close(callback);

Main();
 