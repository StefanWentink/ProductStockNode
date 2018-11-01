"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require("mssql");
const path = require("path");
const config = require(path.resolve("./config.json"));
function getConnectionPool() {
    return new sql.ConnectionPool(config.db);
}
exports.getConnectionPool = getConnectionPool;
