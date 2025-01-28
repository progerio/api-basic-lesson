"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeNotFound = routeNotFound;
function routeNotFound(req, res, next) {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    logging.error(error);
    res.status(404).json({ error: error.message });
    return;
}
