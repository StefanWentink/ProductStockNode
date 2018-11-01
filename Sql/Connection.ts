import * as sql from 'mssql';
import path = require("path");
const config = require(path.resolve("./config.json"));

export function getConnectionPool() : sql.ConnectionPool
{
    return new sql.ConnectionPool(config.db);
}