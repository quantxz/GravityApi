import { Response, Router } from "express";
const routes: Router = Router();


routes.get('/', (res: Response) => {
  return res.status(200).json({
    message: 'Hello'
  })
});

export default routes;
