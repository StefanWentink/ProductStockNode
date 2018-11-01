import { Router, Request, Response } from 'express'
import { executeQuery } from '../Sql/Extensions/QueryHandler';

const router: Router = Router();

router.get('/', (req: Request, res: Response) => {
    var query = "SELECT * FROM [Product]";
    var queryResult = executeQuery(res, query);
});

router.get('/:id', (req: Request, res: Response) => {
    let { id } = req.params;
    var query = 'SELECT * FROM [Product] where [Id] = \'' + id + '\'';
    var queryResult = executeQuery(res, query);
});

router.delete('/:id', (req: Request, res: Response) => {
    let { id } = req.params;
    var query = 'DELETE FROM [Product] where [Id] = \'' + id + '\'';
    var queryResult = executeQuery(res, query);
});

export const ProductController: Router = router;