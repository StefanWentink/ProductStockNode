"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sql = require("mssql");
const Connection_1 = require("../Connection");
function executeQuery(response, query) {
    Connection_1.getConnectionPool().connect().then(function (connection) {
        var sqlRequest = new sql.Request(connection);
        sqlRequest.query(query, function (sqlError, queryResult) {
            if (sqlError) {
                console.log("Error while querying database :- " + sqlError);
                response.status(400).send(sqlError.message);
                connection.close();
            }
            else {
                response.json(queryResult);
                connection.close();
                //response.end(JSON.stringify(queryResult)); // Result in JSON format
            }
        });
    });
}
exports.executeQuery = executeQuery;
;
