import { Request, Response, NextFunction } from "express";
import logging from '../config/logging';
export function loggingHandler(req: Request, res: Response, next: NextFunction) {
  logging.info(`Incoming request: METHOD [ ${req.method}], URL [ ${req.originalUrl}] , IP  [ ${req.socket.remoteAddress} ]`);

  res.on('finish', () => {
    logging.info(`Outgoing response: METHOD [ ${req.method}], URL [ ${req.originalUrl}] , IP  [ ${req.socket.remoteAddress} ]`);
  });

  next();
}