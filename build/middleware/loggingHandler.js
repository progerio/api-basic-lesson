"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggingHandler = loggingHandler;
const logging_1 = __importDefault(require("../config/logging"));
function loggingHandler(req, res, next) {
    logging_1.default.info(`Incoming request: METHOD [ ${req.method}], URL [ ${req.originalUrl}] , IP  [ ${req.socket.remoteAddress} ]`);
    res.on('finish', () => {
        logging_1.default.info(`Outgoing response: METHOD [ ${req.method}], URL [ ${req.originalUrl}] , IP  [ ${req.socket.remoteAddress} ]`);
    });
    next();
}
