"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QueryHandler_1 = require("../Sql/Extensions/QueryHandler");
const router = express_1.Router();
router.get('/', (req, res) => {
    var query = "SELECT * FROM [Product]";
    var queryResult = QueryHandler_1.executeQuery(res, query);
});
router.get('/:id', (req, res) => {
    let { id } = req.params;
    var query = 'SELECT * FROM [Product] where [Id] = \'' + id + '\'';
    var queryResult = QueryHandler_1.executeQuery(res, query);
});
router.delete('/:id', (req, res) => {
    let { id } = req.params;
    var query = 'DELETE FROM [Product] where [Id] = \'' + id + '\'';
    var queryResult = QueryHandler_1.executeQuery(res, query);
});
exports.ProductController = router;
