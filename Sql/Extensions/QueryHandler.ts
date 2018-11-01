import { Response } from 'express'
import * as sql from 'mssql';
import { getConnectionPool } from '../Connection';

export function executeQuery(response: Response, query : string)
{
    getConnectionPool().connect().then(function(connection) {
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
        })
    });
};